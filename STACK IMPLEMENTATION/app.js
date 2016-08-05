const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];



function Stack(){
    this.content = [];
    this.top = 0;
}

Stack.prototype = {
    push: function(number){
        this.content[this.top] = number;
        this.top ++;
    },
    pop: function(){

        var content = this.content[this.top-1];
        this.top-=2;
        return content;

    },
    isEmpty: function(){
        return this.top-1 <= 0
    }

};


var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){

        var stack = new Stack();
        var output = [];
        line.split(' ').forEach(function(number, i){
            number = parseInt(number);

            stack.push(number)
        });

        while (!stack.isEmpty()){
            var value = stack.pop();
            output.push(value);
        }
        console.log(output.join(" "));
    }

});
