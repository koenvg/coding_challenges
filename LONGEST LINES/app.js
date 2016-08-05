const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});
var times;
var lines = [];
lineReader.on('line', function (line) {
    if(!times){
        times = parseInt(line);
    }else{
        lines = lines.concat({
            length: line.length,
            text: line
        });
    }
}).on('close', function() {
    lines.sort(function(a, b) {
        return -(a.length - b.length);
    });
    for(var i = 0; i < times; i++){
        console.log(lines[i].text);
    }
});


