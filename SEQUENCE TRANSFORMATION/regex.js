const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        line = line.split(' ');
        var start = line[0].split('');
        var transformed = line[1];
        var regex = createRegex(start);
        var isMatch = transformed.match(regex);
        if(isMatch){
            console.log('Yes');
        }else{
            console.log('No');
        }
    }
});

function createRegex(start){
    var regex = '';
    start.forEach(function (number) {
        if(number === '0'){
            regex += 'A+'
        }else{
            regex += '(A+|B+)';
        }
    });
    return regex;
}


