const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){

        line = line.split(",");
        var text = line[0].trim().split('');
        var removeChars = line[1].trim().split('');

        var newText = [];
        text.forEach(function(char, i){
            if(removeChars.indexOf(char) == -1){
                newText.push(char);
            }
        });
        console.log(newText.join(''));
    }

});

