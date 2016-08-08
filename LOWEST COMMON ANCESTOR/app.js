const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];



function Node(value){
    this.leafs = [];
    this.value = value;
}

Node.prototype = {
    equals: function(node){
        return node.value == this.value;
    }
};

var n1 = new Node(30);
var n2 = new Node(8);
var n3 = new Node(52);
n1.leafs.push(n2, n3);

var n4 = new Node(3);
var n5 = new Node(20);
n2.leafs.push(n4, n5);
var n6 = new Node(10);
var n7 = new Node(29);
n5.leafs.push(n6, n7);


var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});

lineReader.on('line', function (line) {
    if (line != ''){
        line = line.split(" ");
        var v1 = parseInt(line[0]);
        var v2 = parseInt(line[1]);
        findLCA(n1, v1, v2);

    }
});

function path(root, vector, value){
    if(root == null){
        return false;
    }
    vector.push(root);

    if(root.value == value){
        return true;
    }

    for(var i = 0; i < root.leafs.length; i++){
        var leaf = root.leafs[i];
        if(path(leaf, vector, value)){
            return true;
        }
    }
    vector.pop();
    return false;
}

function findLCA(root, n1, n2){
    var vector1 = [],
        vector2 = [];

    path(root,vector1, n1);
    path(root,vector2, n2);

    var i = 0;
    for( i; i < vector1.length && i < vector2.length; i++){
        if(vector1[i].value != vector2[i].value){
            console.log(vector1[i-1].value);
            return;
        }
    }

}
