const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        line = line.split(';');
        var array = line[0].split(',');
        var reverseSize = parseInt(line[1]);
        var timesToReverse = Math.floor(array.length / reverseSize);
        var newArray = [];
        for(var i = 0; i < timesToReverse; i++){
            newArray = newArray.concat(array.splice(0, reverseSize).reverse());

        }
        newArray = newArray.concat(array);
        console.log(newArray.join(','));
    }
});

