const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        var input = line.split(',');

        var number = input[0];
        var bits = input[1] + input[2];
        console.log(number.indexOf(bits) > -1);
    }

});
