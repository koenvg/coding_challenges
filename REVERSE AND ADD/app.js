const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];

var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        var i = 0;
        var x = parseInt(line);

        while(i < 100){
            x = reverseAndAdd(x);

            if(isPalyndroom(x)){
                console.log(i + 1 + ' ' + x);
                return;
            }
            i++
        }


    }

});

function reverseAndAdd(n){
    var x = parseInt(n.toString().split('').reverse().join(''));
    return x + n;
}

function isPalyndroom(n){
    return parseInt(n.toString().split('').reverse().join('')) == n;
}
