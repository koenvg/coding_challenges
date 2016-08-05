var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var inputParams = line.split(',');
        var x = parseInt(inputParams[0]);
        var n = parseInt(inputParams[1]);

        var i = 2;
        while (n < x){
            n = n * i;
            i++;
        }

        console.log(n);
    }
});