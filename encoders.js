function huffmanEncode(string) {
    len = string.length;
    counts = getCounts(string);
    
    entropy = getEntropy(counts, len);
    
    if (len == 0) {
        return [false, "Введено пустий рядок"];
    }
    
    // treenodize counts
    nodes = [];
    nodeCount = 0;
    for (i in counts) {
        nodes[i] = new BTreeNode(i, i, null, null, counts[i], 1);
        nodeCount++;
    }
    
    if (nodeCount == 1) {
        root = new BTreeNode(null, 2, nodes.pop(), null, len, 1);
    } else {    
        // every time choose two smallest
        for (items = nodeCount; items > 1; items--) {
            smallest = new Array(2);
            iter = 0;
            for (i in nodes) {
                if (iter == 0) {
                    smallest[0] = nodes[i];
                } else if ((iter == 1) && (nodes[i].count >= smallest[0].count)) {                
                    smallest[1] = nodes[i];
                } else if (nodes[i].count < smallest[0].count) {
                    smallest[1] = smallest[0];
                    smallest[0] = nodes[i];
                } else if (nodes[i].count < smallest[1].count) {
                    smallest[1] = nodes[i];
                }
                iter++;
            }

            //now that we have two smallest, replace two nodes with one pointing to them
            delete nodes[smallest[0].index];
            delete nodes[smallest[1].index];
            nodes[nodes.length] = new BTreeNode(null, nodes.length, smallest[1], smallest[0], (smallest[0].count + smallest[1].count), (smallest[0].weight + smallest[1].weight));
        }

        root = nodes.pop();
    }

    // now should we expand this.

    codetable = {};
    codetableInfo = {};
    longestWord = [0];
    codetableLen = [0];
    traverseBTree(root, "", codetable, codetableInfo, longestWord, codetableLen);
    
    longestWordBit = 0;
    lwd = longestWord[0];
    for (lwd = longestWord[0]; lwd; lwd >>= 1){
        longestWordBit++
    }
    
    codetableLen[0] += 16 + nodeCount*longestWordBit;
    
    output = "";
    for (i = 0; i < len; i++) {
        output += codetable[string[i]];
    }
    
    response = {
        "root" : root,
        "codetable" : codetable,
        "codetableInfo" : codetableInfo,
        "output" : output,
        "info" : {
            "rawLen": len,
            "utf8Len": unescape(encodeURIComponent(string)).length,
            "outLen" : output.length,
            "distinctChars": nodeCount,
            "entropy" : entropy,          
            "maxWordLen" : longestWord[0],
            "codetableLen" : codetableLen[0]
        }
    }
    
    return [true, response];
}

function arithmeticEncode(string, chunksize) {
    len = string.length;
    counts = getCounts(string);    
        
    entropy = getEntropy(counts, len);

    // intervalize counts
    bands = [];
    bandCount = 0;
    bandTotalProb = 0;
    ctLen = 0;
    
    chunkSize = chunksize || 16;
    
    var hasEOF = false;
    
    // zero bit to declare EOF if last chunk is unfilled
    if (len % chunkSize) {
        len += 1;
        counts[0] = 1;
        hasEOF = true;
    }
    
    for (i in counts) {
        bands[i] = new CharBand(i, i, bandTotalProb, bandTotalProb+counts[i]/len, counts[i]);
        bandTotalProb = bands[i].end;
        bandCount++;
        ctLen += 64;
        if (i < 128)
            ctLen += 8;
        else if (i < 65536)
            ctLen += 16;
        else
            ctLen += 24;
    }
    
    // split text in chunks, cuz float is very limited
    chunks = [];
            
    for (i = 0; i < Math.ceil(len/chunkSize); i++) {
        chunks[i] = string.substr(i*chunkSize, chunkSize);
    }
    
    // encode each chunk
    results = [];
    
    hasProblematic = false;
    
    for (k in chunks) {
        lowerLimit = 0;
        upperLimit = 1;
        
        //result = bands[chunks[k].charCodeAt(0)].start;
        
        for (i = 0; i < chunks[k].length; i++) {
            newLower = lowerLimit + bands[chunks[k].charCodeAt(i)].start * (upperLimit - lowerLimit);
            newUpper = lowerLimit + bands[chunks[k].charCodeAt(i)].end * (upperLimit - lowerLimit);
            
            lowerLimit = newLower;
            upperLimit = newUpper;
        }
        if (chunks[k].length < chunkSize) {
            newLower = lowerLimit + bands[0].start * (upperLimit - lowerLimit);
            newUpper = lowerLimit + bands[0].end * (upperLimit - lowerLimit);
            
            lowerLimit = newLower;
            upperLimit = newUpper;
        }
        
        number = getNumberWithinBand(lowerLimit, upperLimit);
        if (!number[0])
            hasProblematic = true;
        
        results[k] = {
            "text" : chunks[k],
            "lowerLimit" : lowerLimit,
            "upperLimit" : upperLimit,
            "number" : number
        };
    }
    
    response = {
        "output" : results,
        "bands" : bands,
        "info" : {
            "rawLen": len,
            "utf8Len": unescape(encodeURIComponent(string)).length,
            "outLen" : Math.ceil(len/chunkSize)*64,
            "distinctChars": bandCount,
            "entropy" : entropy,
            "chunkSize" : chunkSize,
            "codetableLen" : ctLen,
            "hasProblematic" : hasProblematic,
            "oneChunkAndEOF" : ((chunks.length == 1) && hasEOF)
        }
    }
    
    return [true, response];
}

function huffmanDecode(string, codetable) {
    
    strlen = string.length;
    strpos = 0;
    
    // invert codetable
    invct = {};
    for (chr in codetable) if (codetable.hasOwnProperty(chr)) {
        invct[codetable[chr]] = chr;
    }
    
    output = "";
    
    while (strpos < strlen) {
        for (i = strpos; i < strlen; i++) {
            bitSeq = string.substring(strpos, i+1);
            if (invct.hasOwnProperty(bitSeq)) {
                output += invct[bitSeq];
                strpos = i+1;
                break;
            }
            if (i == strlen-1) {
                strpos = strlen;
                return [false, "Неможливо відновити повідомлення після: <p>" + output+ "</p>"];
            }
        }
    }
    
    response = {
        "output" : output,
        "info" : {
            "encodedLen": strlen,
            "decodedRawLen" : output.length,
            "decodedUtf8Len": unescape(encodeURIComponent(output)).length
        }
    }
    
    return [true, response];
    
}

function arithmeticDecode(string, codetable, chunkSize) {
    
    numbers = string.split(' ');
    
    ctCount = codetable.length;
        
    output = "";
    
    for (i in numbers) {
        num = parseFloat(numbers[i]);
        if (num > 1)
            num = 1;
        else if (num < 0)
            num = 0;
        chunk = "";
        for (j = 0; j < chunkSize; j++) {
            var n;
            for (n = 0; n < ctCount; n++) 
                if (num >= codetable[n][0] && (num < (codetable[n+1]?codetable[n+1][0]:1)))
                    break;
            
            if (codetable[n][1].charCodeAt(0) == 0)
                break;          
            
            chunk += codetable[n][1];
            num -= codetable[n][0];
            if (n == ctCount-1)
                num /= (1-codetable[n][0])
            else
                num /= (codetable[n+1][0] - codetable[n][0]);
        }        
        output += chunk;
    }
    
    response = {
        "output" : output,
        "info" : {
            "encodedLen": numbers.length * 64,
            "decodedRawLen" : output.length,
            "decodedUtf8Len": unescape(encodeURIComponent(output)).length
        }
    }
    
    return [true, response];
    
}

function lz78Encode(string) {
    len = string.length;
    
    dict = {};
    outWords = [];
    
    pos = 0;
    dictPos = 1;
    
    referenced = [];
    
    len2 = len;
    bits = 1;
    while (len2 >>= 1)
        bits++
    
    while (pos < len) {
        
        reference = 0;
        
        for (b = pos+1; b <= len; b++) {
            substr = string.substring(pos, b);
            if (dict[substr]) {
                reference = dict[substr];
                if (b == len) {
                    outWords.push([null, reference]);
                    referenced[dictPos] = 1;
                    referenced[reference]++;
                    pos = b;
                    break;
                }
            } else {
                dict[substr] = dictPos;
                referenced[dictPos] = 1;
                referenced[reference]++;
                dictPos++;
                outWords.push([string.charAt(b-1), reference]);
                pos = b;
                break;
            } 
        }
        
    }
    
    convDic = [];
    for (i in dict) {
        convDic[dict[i]] = [i, referenced[dict[i]]];
    }
    
    outLen = 8;
    for (i in outWords) {
        outLen += bits;
        if (outWords[i][0] == null)
            continue;
        z = outWords[i][0].charCodeAt(0);
        if (z < 128)
            outLen += 8;
        else if (z < 65536)
            outLen += 16;
        else
            outLen += 24;
    }
        
    response = {
        "outWords" : outWords,
        "dictionary" : convDic,
        "info" : {
            "rawLen": len,
            "utf8Len": unescape(encodeURIComponent(string)).length,
            "outLen" : outLen,
            "referenceBits" : bits
        }
    }
    
    return [true, response];
    
}

function lz78Decode(words) { // let it be those words
    
    wLen = words.length;
    output = "";
    
    dict = [];
    
    try {
        for (i = 0; i < wLen; i++) {
            if (words[i][1] == 0) {
                output += words[i][0];
                dict[i+1] = words[i][0];
            } else {
                dict[i+1] = dict[words[i][1]] + words[i][0];  
                if (words[i][0])
                    output += dict[i+1];
                else
                    output += dict[words[i][1]];
            }
        }
    } catch(e) {
        return [false, "Неочікувана помилка: "+e.message];
    }
    
    response = {
        "output" : output,
        "info" : {
            "encodedLen": wLen * 16,
            "decodedRawLen" : output.length,
            "decodedUtf8Len": unescape(encodeURIComponent(output)).length
        }
    }
    
    return [true, response];
    
}




// UTILITY

function getCounts(string) {
    counts = [];
    for (i = 0; i < string.length; i++) {
        charcode = string.charCodeAt(i);
        counts[charcode] = counts[charcode]? counts[charcode]+1 : 1;
    }
    return counts;
}

function getEntropy(counts, total) {
    entropy = 0;
    for (i in counts) {
        entropy += (Math.log(counts[i]/total)/Math.LN2)*(counts[i]/total);
    }
    return 0-entropy;
}


function traverseBTree(node, word, codetable, codetableInfo, longestWord, codetableLen) {
    if (node == null) {
        return;
    }
    if (node.letter != null) {
        codetable[String.fromCharCode(node.letter)] = word;
        codetableInfo[node.letter] = {
            "letter" : node.letter,
            "word" : word,
            "events" : node.count
        }
        codetableLen[0] += word.length;
        if (node.letter < 128)
            codetableLen[0] += 8;
        else if (node.letter < 65536)
            codetableLen[0] += 16;
        else
            codetableLen[0] += 24;
        if (longestWord[0] < word.length)
            longestWord[0] = word.length;
        //codetable[node.letter] = prefix;
    } else {
        traverseBTree(node.node[0], word+"0", codetable, codetableInfo, longestWord, codetableLen);
        traverseBTree(node.node[1], word+"1", codetable, codetableInfo, longestWord, codetableLen);
    }
    return;
}

function BTreeNode(letter, index, node0, node1, count, weight) {
    this.letter = letter;
    this.index = index;
    this.weight = weight;
    this.count = count;
    this.node = [node0, node1];
}

function CharBand(letter, index, start, end, count) {
    this.letter = letter;
    this.index = index;
    this.start = start;
    this.end = end;
    this.count = count;
}

function getNumberWithinBand(start, end) {
    sString = start.toFixed(20);
    eString = end.toFixed(20);
    
    result = start;
    for (i = 0; i < sString.length; i++) {
        if (sString[i] != eString[i]) {
            if ((eString.charCodeAt(i) - sString.charCodeAt(i) == 1) && (i < sString.length-1)) {
                num = Math.ceil((parseInt(eString[i])*10 + parseInt(eString[i+1]) + parseInt(sString[i])*10 + parseInt(sString[i+1]))/2);
                result = sString.substr(0, i) + ((num < 10)? ("0"+num) : num);
            } else {
                result = sString.substr(0, i) + Math.ceil((parseInt(eString[i]) + parseInt(sString[i]))/2);
            }
            result = parseFloat(result);
            break;
        }
    }
    
    if ((result == start) || (result == end))
        return [false, result];
    else if (isNaN(result)) 
        return [true, (start+end)/2];
    else
        return [true, result];
}