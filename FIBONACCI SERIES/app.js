const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){

        var n = parseInt(line);
        if(n >= 0){
            console.log(fibonatche(n));
        }

    }

});

function fibonatche(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }else{
        return fibonatche(n - 1) + fibonatche(n - 2);
    }
}
