// RESULT INNERHTML

htmls = {
    "huffmanEncode" : '\
            <h2>Результат</h2>\n\
                <div class="row">\n\
                    <div class="span12">\n\
                        <h3>Кодове дерево</h3>\n\
                        <svg id="graph" xmlns="http://www.w3.org/2000/svg" version="1.1" width="940" height="400" viewBox="0 0 940 400" preserveAspectRatio="xMidYMid meet">\n\
                            <g id="gPaths">\n\
                            </g>\n\
                            <g id="gNodes">\n\
                            </g>\n\
                            <g id="gNodeCaps">\n\
                            </g>\n\
                        </svg>\n\
                    </div>\n\
                </div>\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Кодова таблиця</h3>\n\
                        <div style="max-height: 410px; margin-bottom: 9px; overflow: auto;">\n\
                            <table class="table table-striped table-bordered table-condensed" style="margin-bottom: 0">\n\
                                <thead>\n\
                                    <tr>\n\
                                        <th id="tLetter">Літера</th>\n\
                                        <th id="tEvents">Кільк.</th>\n\
                                        <th id="tWordLen">Ймов.</th>\n\
                                        <th id="tWord">Кодове слово</th>\n\
                                    </tr>\n\
                                </thead>\n\
                                <tbody id="resultTableBody">\n\
                                </tbody>\n\
                            </table>\n\
                        </div>\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість вхідних даних</dt>\n\
                                <dd><output id="inLen" style="height: 52px;"></output></dd>\n\
                            <dt>Кількість вихідних даних (без урахування кодової таблиці)</dt>\n\
                                <dd><output id="outLen"></output></dd>\n\
                            <dt>Розмір кодової таблиці (стиснено)</dt>\n\
                                <dd><output id="codetableLen"></output></dd>\n\
                            <dt>Ентропія джерела</dt>\n\
                                <dd><output id="entropy"></output></dd>\n\
                            <dt>Середня довжина повідомлення</dt>\n\
                                <dd><output id="avgLen"></output></dd>\n\
                            <dt>Надлишковість коду</dt>\n\
                                <dd><output id="overhead"></output></dd>\n\
                            <dt>Коефіцієнт стиску (відносно UTF-8)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                            <dt>Коефіцієнт стиску (із урахуванням кодової таблиці)</dt>\n\
                                <dd><output id="cRWithCodetable"></output></dd>\n\
                            <dt>Кількість різних повідомлень</dt>\n\
                                <dd><output id="distinctChars"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Кодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                        <h3>Кодова таблиця <small>(JSON, для декодування)</small></h3>\n\
                        <textarea id="outputCT" class="span8" style="height: 80px" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
    
    "huffmanDecode" : '\
            <h2>Результат</h2>\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість вхідних даних (без урахування кодової таблиці)</dt>\n\
                                <dd><output id="encodedLen"></output></dd>\n\
                            <dt>Кількість декодованих даних</dt>\n\
                                <dd><output id="decodedLen" style="height: 52px;"></output></dd>\n\
                            <dt>Коефіцієнт стиску (відносно UTF-8)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Декодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
    
    "arithmeticEncode" : '\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Кодова таблиця</h3>\n\
                        <div style="max-height: 410px; margin-bottom: 9px; overflow: auto;">\n\
                            <table class="table table-striped table-bordered table-condensed" style="margin-bottom: 0">\n\
                                <thead>\n\
                                    <tr>\n\
                                        <th id="tLetter">Літ.</th>\n\
                                        <th id="tEvents">Кільк.</th>\n\
                                        <th id="tStart">Початок</th>\n\
                                        <th id="tEnd">Кінець</th>\n\
                                        <th id="tWordLen">Ширина</th>\n\
                                    </tr>\n\
                                </thead>\n\
                                <tbody id="resultTableBody">\n\
                                </tbody>\n\
                            </table>\n\
                        </div>\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість вхідних даних</dt>\n\
                                <dd><output id="inLen" style="height: 52px;"></output></dd>\n\
                            <dt>Кількість вихідних даних (без урахування кодової таблиці)</dt>\n\
                                <dd><output id="outLen"></output></dd>\n\
                            <dt>Розмір кодової таблиці (стиснено)</dt>\n\
                                <dd><output id="codetableLen"></output></dd>\n\
                            <dt>Ентропія джерела</dt>\n\
                                <dd><output id="entropy"></output></dd>\n\
                            <dt>Середня довжина повідомлення</dt>\n\
                                <dd><output id="avgLen"></output></dd>\n\
                            <dt>Надлишковість коду</dt>\n\
                                <dd><output id="overhead"></output></dd>\n\
                            <dt>Коефіцієнт стиску (відносно UTF-8)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                            <dt>Коефіцієнт стиску (із урахуванням кодової таблиці)</dt>\n\
                                <dd><output id="cRWithCodetable"></output></dd>\n\
                            <dt>Довжина блоку, символів</dt>\n\
                                <dd><output id="oChunkSize"></output></dd>\n\
                            <dt>Кількість різних повідомлень</dt>\n\
                                <dd><output id="distinctChars"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Кодоване повідомлення (табличне представлення)</h3>\n\
                        <div style="max-height: 410px; margin-bottom: 9px; overflow: auto;">\n\
                            <table class="table table-striped table-bordered table-condensed" style="margin-bottom: 0">\n\
                                <thead>\n\
                                    <tr>\n\
                                        <th id="oChunk">Блок</th>\n\
                                        <th id="oStart">Початок</th>\n\
                                        <th id="oEnd">Кінець</th>\n\
                                        <th id="oNumber">Число</th>\n\
                                    </tr>\n\
                                </thead>\n\
                                <tbody id="outputDataTableBody">\n\
                                </tbody>\n\
                            </table>\n\
                        </div>\n\
                        <h3>Кодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                        <h3>Кодова таблиця <small>(JSON, для декодування)</small></h3>\n\
                        <textarea id="outputCT" class="span8" style="height: 80px" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
    
    "arithmeticDecode" : '\n\
            <h2>Результат</h2>\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість кодованих даних (без урахування кодової таблиці)</dt>\n\
                                <dd><output id="outLen"></output></dd>\n\
                            <dt>Кількість декодованих даних</dt>\n\
                                <dd><output id="inLen" style="height: 52px;"></output></dd>\n\
                            <dt>Коефіцієнт стиску (відносно UTF-8)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Декодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
    
    "lz78Encode" : '\
            <h2>Результат</h2>\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Словник</h3>\n\
                        <div style="max-height: 410px; margin-bottom: 9px; overflow: auto;">\n\
                            <table class="table table-striped table-bordered table-condensed" style="margin-bottom: 0">\n\
                                <thead>\n\
                                    <tr>\n\
                                        <th id="tNumber">Позиція</th>\n\
                                        <th id="tDictWord">Слово</th>\n\
                                        <th id="tUsed">Вжите</th>\n\
                                    </tr>\n\
                                </thead>\n\
                                <tbody id="resultTableBody">\n\
                                </tbody>\n\
                            </table>\n\
                        </div>\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість вхідних даних</dt>\n\
                                <dd><output id="inLen" style="height: 52px;"></output></dd>\n\
                            <dt>Кількість вихідних даних</dt>\n\
                                <dd><output id="outLen"></output></dd>\n\
                            <dt>Коефіцієнт стиску (відносно UTF-8)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Кодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
    
    "lz78Decode" : '\n\
            <h2>Результат</h2>\n\
                <div class="row">\n\
                    <div class="span4">\n\
                        <h3>Інформація</h3>\n\
                        <dl>\n\
                            <dt>Кількість кодованих даних</dt>\n\
                                <dd><output id="outLen"></output></dd>\n\
                            <dt>Кількість декодованих даних</dt>\n\
                                <dd><output id="inLen" style="height: 52px;"></output></dd>\n\
                            <dt>Коефіцієнт стиску (бреше!)</dt>\n\
                                <dd><output id="compressRatio"></output></dd>\n\
                        </dl>\n\
                    </div>\n\
                    <div class="span8">\n\
                        <h3>Декодоване повідомлення</h3>\n\
                        <textarea id="outputData" class="span8" style="height: 525px; font-family: Consolas, monospace" readonly=""></textarea>\n\
                    </div>\n\
                </div>',
}


/*
 * 
 * 
 * END
 * 
 * 
 */

function drawTree(root, distinctWords, maxWordLen) {
                
    cellWidth = 30;
    cellHeight = Math.ceil(0.866 * cellWidth);

    vMarg = cellHeight / 2;
    hMarg = cellWidth / 2;

    var width = cellWidth * distinctWords;
    var height = cellHeight * (maxWordLen + 1) + 10;

    var g = document.getElementById('graph');
    if (!g) 
        return;

    g.setAttribute('viewBox', "0 0 "+width+' '+height);

    var viewportWidth = parseInt(g.getAttribute('width'));

    if (viewportWidth >= width) {
        g.setAttribute("height", height);
    } else {
        g.setAttribute("height", viewportWidth*height/width);
    }

    drawNodeRecurse(root, 0, root.weight, 0, null, null, null);

}
            
function seekNodeEquilibrium(node) {
    if (!node || (!node.node[0] && !node.node[1])) {
        return [0,0];  // DOUBTED
    }
    if (node.node[0] && node.node[1]) {
        return [node.node[0].weight, node.node[1].weight];
    }
    if (node.node[0] && !node.node[1]) {
        return seekNodeEquilibrium(node.node[0]);
    }
    if (node.node[1] && !node.node[0]) {
        return seekNodeEquilibrium(node.node[1]);
    }
    return [0,0];
}

function drawNodeRecurse(node, lod, tWidth, tOffset, px, py, left) {

    var equilibrium = seekNodeEquilibrium(node);
    var nLeft = equilibrium[0];
    var nRight = equilibrium[1];

    var realY = vMarg + lod*cellHeight;
    var realX;
    if (nLeft == 0)
        realX = tOffset*cellWidth + hMarg;
    else if (nRight == 0)
        realX = (tWidth + tOffset)*cellWidth - hMarg;
    else
        realX = (nLeft + tOffset)*cellWidth;

    if (lod != 0) {
        var l = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        l.setAttribute('x1', px);
        l.setAttribute('x2', realX);
        l.setAttribute('y1', py);
        l.setAttribute('y2', realY);    
        if (left)
            l.setAttribute('style', 'stroke: #000000; stroke-width: 2px; stroke-linecap: round;'); 
        else
            l.setAttribute('style', 'stroke: #BB6622; stroke-width: 2px; stroke-linecap: round;');                         
        document.getElementById('gPaths').appendChild(l);                    
    }

    if (node.letter) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        t.setAttribute('x', realX);
        t.setAttribute('y', realY + 20);    
        t.setAttribute('style', 'text-anchor: middle; font-family: "Arial", sans-serif; font-size: 16px;');  
        t.textContent = prettyCharShort(node.letter);
        document.getElementById('gNodeCaps').appendChild(t);                    
    }

    var c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    c.setAttribute('cx', realX);
    c.setAttribute('cy', realY);
    c.setAttribute('r', 6);  
    c.setAttribute('style', 'stroke: #000; stroke-width: 1px; fill: #d0d0d0;');                
    document.getElementById('gNodes').appendChild(c);

    // and text too

    if (node.node[0])
        drawNodeRecurse(node.node[0], lod+1, nLeft, tOffset, realX, realY, true);
    if (node.node[1])
        drawNodeRecurse(node.node[1], lod+1, nRight, tOffset+nLeft, realX, realY, false);
}

function redrawTable(collection, results, sortBy, arithm) {
    
    var coll = collection;
    
    document.getElementById('resultTableBody').innerHTML = "";

    var outColl = [];

    for (i in coll) if (coll.hasOwnProperty(i)) {
        coll[i]["i_ndex"] = i;
        outColl.push(coll[i]);
    }

    outColl = outColl.sort(function(a, b){
        if (sortBy == "letter") {
            return a.letter - b.letter;
        } else if (sortBy == "number") {
            return a.i_ndex - b.i_ndex;
        } else if (sortBy == "dictword") {
            if (a[0].length == b[0].length)
                return strcmp(a[0], b[0]);
            return a[0].length - b[0].length;
        } else if (sortBy == "used") {
            return b[1] - a[1];
        } else if (sortBy == "events") {
            return a.events - b.events;
        } else if (sortBy == "word") {
            return strcmp(a.word, b.word);
        } else if (sortBy == "wordLen") {
            if (a.word.length == b.word.length)
                return strcmp(a.word, b.word);
            return a.word.length - b.word.length;
        }
        return 0;
    });

    if (!arithm) {

        for (i in outColl) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>'+
                prettyChar(outColl[i].letter) +'</td><td>'+
                outColl[i].events+'</td><td>'+
                (outColl[i].events / results.info.rawLen).toFixed(Math.ceil(Math.log(results.info.distinctChars)))  +'</td><td>'+
                outColl[i].word+'</td>';

            document.getElementById('resultTableBody').appendChild(row);
        }
    } else {
        for (i in outColl) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>'+
                outColl[i]["i_ndex"] +'</td><td>'+
                outColl[i][0]+'</td><td>'+
                outColl[i][1] +'</td>';

            document.getElementById('resultTableBody').appendChild(row);
        }
    }
}
            
function prettyChar(index) {
    if (index == 10) 
        return "Новий рядок";
    else if (index == 13) 
        return "Повернення каретки";
    else if (index == 9)
        return "Символ табуляції";
    else if (index == 32)
        return "Пробіл"
    else if (index == 0) 
        return "Кінець";
    else if (index < 32)
        return "Символ №"+index;
    else
        return String.fromCharCode(index);
}

function prettyCharShort(index) {
    if (index == 10) 
        return "\\n";
    else if (index == 13) 
        return "\\r";
    else if (index == 9)
        return "\\t";
    else if (index == 32)
        return "\" \"";
    else if (index == 0)
        return "EOF";
    else if (index < 32)
        return "#"+index;
    else
        return String.fromCharCode(index);
}

function checkAutoSelectAll() {
    var textareas = document.getElementsByTagName('textarea');
    for (i in textareas) if (textareas[i] instanceof HTMLTextAreaElement && textareas[i].readOnly) {
        textareas[i].addEventListener("click", function(elem){
            return function(){elem.select();}
        }(textareas[i]));
    }
}

function strcmp(a, b) {
    if (a.length != 0 && b.length != 0) {
        var dist = a.charCodeAt(0) - b.charCodeAt(0);
        return dist? dist : strcmp(a.substr(1), b.substr(1));
    } else if (a.length == 0 && b.length != 0)
        return -1;
    else if (a.length != 0 && b.length == 0)
        return 1;
    else
        return 0;
}

/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


            
function outputHuffmanEncode(results) {

    document.getElementById('result').innerHTML = htmls['huffmanEncode'];

    document.getElementById('outputData').value = results.output;
    document.getElementById('outputCT').value = JSON.stringify(results.codetable);

    document.getElementById('resultTableBody').innerHTML = "";

    for (i in results.codetableInfo) {
        row = document.createElement('tr');
        row.innerHTML = '<td>'+
            prettyChar(results.codetableInfo[i].letter) +'</td><td>'+
            results.codetableInfo[i].events+'</td><td>'+
            (results.codetableInfo[i].events / results.info.rawLen).toFixed(Math.ceil(Math.log(results.info.distinctChars)))  +'</td><td>'+
            results.codetableInfo[i].word+'</td>';

        document.getElementById('resultTableBody').appendChild(row);
    }

    document.getElementById('tLetter').addEventListener('click', function() {
        redrawTable(results.codetableInfo, results, 'letter');
    });
    document.getElementById('tWord').addEventListener('click', function() {
        redrawTable(results.codetableInfo, results, 'word');                    
    });
    document.getElementById('tWordLen').addEventListener('click', function() {
        redrawTable(results.codetableInfo, results, 'wordLen');                    
    });
    document.getElementById('tEvents').addEventListener('click', function() {
        redrawTable(results.codetableInfo, results, 'events');                    
    });

    document.getElementById('entropy').value = results.info.entropy;
    document.getElementById('distinctChars').value = results.info.distinctChars;
    document.getElementById('inLen').innerHTML = "ASCII:\t"+(results.info.rawLen*8)+" біт<br>UTF-16:\t"+(results.info.rawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.utf8Len*8)+" біт</b>"
    document.getElementById('outLen').value = results.info.outLen+" біт";
    document.getElementById('codetableLen').value = results.info.codetableLen+" біт";

    avgLen = results.info.outLen / results.info.rawLen;
    document.getElementById('avgLen').value = avgLen +" біт/символ";

    overhead = 1-(results.info.entropy / avgLen);
    document.getElementById('overhead').value = overhead;    

    if (overhead > 0.05) {
        document.getElementById('overhead').className += " warning";
    } else
        document.getElementById('overhead').className += " success";

    compressRatio = results.info.utf8Len*8 / results.info.outLen;
    cRWithCodetable = results.info.utf8Len*8 / (results.info.outLen + results.info.codetableLen);
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";
    document.getElementById('cRWithCodetable').value = cRWithCodetable.toFixed(4) +" ("+ Math.round(100/cRWithCodetable) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    if (cRWithCodetable < 1) {
        document.getElementById('cRWithCodetable').className += " error";
    } else if (cRWithCodetable > 1) {
        document.getElementById('cRWithCodetable').className += " success";
    } 

    drawTree(results.root, results.info.distinctChars, results.info.maxWordLen);

    document.getElementById('result').style.display = "block";

    checkAutoSelectAll();

}

function outputHuffmanDecode(results) {

    document.getElementById('result').innerHTML = htmls['huffmanDecode'];

    document.getElementById('outputData').value = results.output;

    document.getElementById('decodedLen').innerHTML = "ASCII:\t"+(results.info.decodedRawLen*8)+" біт<br>UTF-16:\t"+(results.info.decodedRawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.decodedUtf8Len*8)+" біт</b>"
    document.getElementById('encodedLen').value = results.info.encodedLen+" біт";

    compressRatio = results.info.decodedUtf8Len*8 / results.info.encodedLen;
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    document.getElementById('result').style.display = "block";

    checkAutoSelectAll();

}

function outputArithmetic(results) {

    document.getElementById('result').innerHTML = "";

    document.getElementById('result').innerHTML += "<h2>Результат</h2>";

    if (results.info.oneChunkAndEOF) {
        document.getElementById('result').innerHTML += '\n\
    <div class="alert alert-info alert-block">\n\
        <a class="close" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">×</a>\n\
        <h4 class="alert-heading">Увага!</h4>\n\
        <p>Для декодування надано єдиний блок даних, що, до того ж, менший, ніж вказаний у параметрах розмір блоку. Іншими словами, введена фраза коротша, ніж це виставлено в налаштуваннях.</p>\n\
        <p>Це не є проблемою, надане повідомлення може закодуватись та розкодуватись без проблем. Проте для того, щоб декодер припинив декодування на кінці слова, а не блоку (щоб не виникало\n\
зайвих символів), до слова додається маркер кінця EOF, що також займає місце на кодувальному відрізку та в таблиці, та, можливо, псує гарні числа.</p>\n\
        <p>Ви можете скоротити розмір блоку до довжини слова. При цьому місце під маркер кінця повідомлення не виділятиметься.</p>\n\
        <p>\n\
            <button class="btn btn-info" onclick="document.getElementById(\'chunksize\').value='+(results.info.rawLen-1)+'; code(); event.preventDefault()">Скоротити</button>\n\
        </p>\n\
    </div>';
    }

    else if (results.info.hasProblematic) {
        document.getElementById('result').innerHTML += '\n\
    <div class="alert alert-warning alert-block">\n\
        <a class="close" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">×</a>\n\
        <h4 class="alert-heading">Обережно!</h4>\n\
        <p>Під час кодування повідомлення втрачена певна інформація. Це могло бути спричинене великою кількістю різних літер або довжиною повідомлення.</p>\n\
        <p>Ви можете переглянути проблемні рядки в кодовій таблиці &mdash; вони підсвічені червоним кольором.</p>\n\
        <p>Ви можете зберегти результат, але, швидш за все, дешифроване повідомлення міститиме помилки. Радимо зменшити величину блоку. При цьому зменшиться\n\
        ефективність стиснення, але збільшиться шанс, що повідомлення залишиться неушкодженим.</p>\n\
        <p>\n\
            <button class="btn btn-warning" onclick="document.getElementById(\'chunksize\').value-=1; code(); event.preventDefault()">Зменшити величину та спробувати знову</button>\n\
        </p>\n\
    </div>';
    }

    document.getElementById('result').innerHTML += htmls['arithmeticEncode'];

    codeTable = [];

    for (i in results.bands) if (results.bands.hasOwnProperty(i)) {

        codeTable.push([results.bands[i].start, String.fromCharCode(results.bands[i].letter)]);

        row = document.createElement('tr');
        row.innerHTML = '<td>'+
            prettyCharShort(results.bands[i].letter) +'</td><td>'+
            results.bands[i].count+'</td><td>'+
            results.bands[i].start.toFixed(Math.ceil(Math.log(results.info.distinctChars)))+'</td><td>'+
            results.bands[i].end.toFixed(Math.ceil(Math.log(results.info.distinctChars)))+'</td><td>'+
            (results.bands[i].count / results.info.rawLen).toFixed(Math.ceil(Math.log(results.info.distinctChars)))  +'</td>';

        if (results.bands[i].start == results.bands[i].end)
            row.className += " problem";

        document.getElementById('resultTableBody').appendChild(row);
    }

    document.getElementById('outputCT').value = JSON.stringify(codeTable);

    outputNums = [];

    document.getElementById('outputDataTableBody').innerHTML = "";

    for (i in results.output) if (results.output.hasOwnProperty(i)) {

        outputNums.push(results.output[i].number[1]);

        row = document.createElement('tr');
        row.innerHTML = '<td>"'+
            results.output[i].text +'"</td><td>'+
            results.output[i].lowerLimit+'</td><td>'+
            results.output[i].upperLimit+'</td><td>'+
            results.output[i].number[1] +'</td>';

        if (!results.output[i].number[0])
            row.className += " problem";

        document.getElementById('outputDataTableBody').appendChild(row);
    }


    document.getElementById('outputData').value = outputNums.join(' ');
    document.getElementById('entropy').value = results.info.entropy;
    document.getElementById('distinctChars').value = results.info.distinctChars;
    document.getElementById('inLen').innerHTML = "ASCII:\t"+(results.info.rawLen*8)+" біт<br>UTF-16:\t"+(results.info.rawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.utf8Len*8)+" біт</b>"
    document.getElementById('outLen').value = results.info.outLen+" біт";
    document.getElementById('codetableLen').value = results.info.codetableLen+" біт";
    document.getElementById('oChunkSize').value = results.info.chunkSize+" символів";

    avgLen = results.info.outLen / results.info.rawLen;
    document.getElementById('avgLen').value = avgLen +" біт/символ";

    overhead = 1-(results.info.entropy / avgLen);
    document.getElementById('overhead').value = overhead;    

    if (overhead > 0.05) {
        document.getElementById('overhead').className += " warning";
    } else
        document.getElementById('overhead').className += " success";

    compressRatio = results.info.utf8Len*8 / results.info.outLen;
    cRWithCodetable = results.info.utf8Len*8 / (results.info.outLen + results.info.codetableLen);
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";
    document.getElementById('cRWithCodetable').value = cRWithCodetable.toFixed(4) +" ("+ Math.round(100/cRWithCodetable) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    if (cRWithCodetable < 1) {
        document.getElementById('cRWithCodetable').className += " error";
    } else if (cRWithCodetable > 1) {
        document.getElementById('cRWithCodetable').className += " success";
    }

    document.getElementById('result').style.display = "block";

    checkAutoSelectAll();
}

function outputArithmeticDecode(results) {

    document.getElementById('result').innerHTML = htmls['arithmeticDecode'];

    document.getElementById('outputData').value = results.output;

    document.getElementById('inLen').innerHTML = "ASCII:\t"+(results.info.decodedRawLen*8)+" біт<br>UTF-16:\t"+(results.info.decodedRawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.decodedUtf8Len*8)+" біт</b>"
    document.getElementById('outLen').value = results.info.encodedLen+" біт";

    compressRatio = results.info.decodedUtf8Len*8 / results.info.encodedLen;
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    document.getElementById('result').style.display = "block";

    checkAutoSelectAll();

}


function outputLz78Encode(results) {

    document.getElementById('result').innerHTML = htmls['lz78Encode'];

    document.getElementById('outputData').value = JSON.stringify(results.outWords);

    document.getElementById('resultTableBody').innerHTML = "";

    for (i in results.dictionary) {
        row = document.createElement('tr');
        row.innerHTML = '<td>'+
            i +'</td><td>'+
            results.dictionary[i][0]+'</td><td>'+
            results.dictionary[i][1] +'</td>';

        document.getElementById('resultTableBody').appendChild(row);
    }

    document.getElementById('inLen').innerHTML = "ASCII:\t"+(results.info.rawLen*8)+" біт<br>UTF-16:\t"+(results.info.rawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.utf8Len*8)+" біт</b>"
    document.getElementById('outLen').value = results.info.outLen+" біт";

    compressRatio = results.info.utf8Len*8 / results.info.outLen;
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    document.getElementById('result').style.display = "block";
    
    document.getElementById('tNumber').addEventListener('click', function() {
        redrawTable(results.dictionary, results, 'number', true);
    });
    document.getElementById('tDictWord').addEventListener('click', function() {
        redrawTable(results.dictionary, results, 'dictword', true);                    
    });
    document.getElementById('tUsed').addEventListener('click', function() {
        redrawTable(results.dictionary, results, 'used', true);                    
    });

    checkAutoSelectAll();

}

function outputLz78Decode(results) {

    document.getElementById('result').innerHTML = htmls['lz78Decode'];

    document.getElementById('outputData').value = results.output;

    document.getElementById('inLen').innerHTML = "ASCII:\t"+(results.info.decodedRawLen*8)+" біт<br>UTF-16:\t"+(results.info.decodedRawLen*16)+" біт<br><b>UTF-8:\t"+(results.info.decodedUtf8Len*8)+" біт</b>"
    document.getElementById('outLen').value = results.info.encodedLen+" біт";

    compressRatio = results.info.decodedUtf8Len*8 / results.info.encodedLen;
    document.getElementById('compressRatio').value = compressRatio.toFixed(4) +" ("+ Math.round(100/compressRatio) +"%)";

    if (compressRatio < 1) {
        document.getElementById('compressRatio').className += " error";
    } else if (compressRatio > 2) {
        document.getElementById('compressRatio').className += " success";
    } 

    document.getElementById('result').style.display = "block";

    checkAutoSelectAll();

}




function outputError(errorMessage) {
    document.getElementById('result').innerHTML = '<div class="alert alert-error alert-block">\n\
        <a class="close" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">×</a>\n\
        <h4 class="alert-heading">Помилка!</h4> ' + errorMessage + '\n</div>';

    document.getElementById('result').style.display = "block";
}