const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];


var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        line = line.split("");
        for(var i = 0; i < line.length; i++){
            if(timesInArray(line, line[i]) == 1){
                console.log(line[i]);
                return;
            }
        }

    }
});


function timesInArray(array, value){
    var times = 0;
    array.forEach(function(data, i){
        if(data === value){
            times ++;
        }
    });
    return times;
}