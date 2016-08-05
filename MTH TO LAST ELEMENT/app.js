const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){

        var list = [];
        line.split(' ').forEach(function(element, i){

            list.push(element)
        });

        var index = parseInt(list[list.length - 1]);

        if(index < list.length){

            var indexOfSolution = list.length - 1 - index;
            console.log(list[indexOfSolution]);
        }
    }

});
