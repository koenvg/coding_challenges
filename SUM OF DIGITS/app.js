const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        var input = line.split('');
        var total = 0;
        input.forEach(function(number, i){
            number = parseInt(number);

            total += number;
        });
        console.log(total);
    }

});
