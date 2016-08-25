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
        var matchingMatrix = createArray(start.length, transformed.length);
        checkMatchingPairs(start, transformed, matchingMatrix, 0, 0);
        //console.log(matchingMatrix);
        if(matchingMatrix[start.length-1][transformed.length-1]){
            console.log('Yes');
        }else{
            console.log('No');
        }
    }
});

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
function matches(numberInPattern, match){
    var a = match.indexOf("A") > -1;
    var b = match.indexOf("B") > -1;
    if(numberInPattern === '0'){
        return  a && !b;
    }else{

        return (!a && b) || (a && !b);
    }
}

function checkMatchingPairs(pattern, match, matchingMatrix, row, col){
    //Solution found
    if(matchingMatrix[pattern.length-1][match.length-1]){
        return;
    }
    //Out of bound check
    if(row >= matchingMatrix.length || col >= matchingMatrix[row].length){
        return;
    }
    //Check for checks already done
    if(matchingMatrix[row][col]){
        return;
    }
    for(var i = col; i < match.length; i++){
        matchingMatrix[row][i] = false;
        var substring = match.substring(col, i+1);
        if(matches(pattern[row], substring)){
            matchingMatrix[row][i] = true;
            checkMatchingPairs(pattern, match, matchingMatrix, row+1, i+1);
        }
    }
}



