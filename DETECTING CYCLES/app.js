const fs = require('fs');
const readLine = require('readline');
const inputFile = process.argv[2];
var vertices = [];
var lineReader = readLine.createInterface({
    input: fs.createReadStream(inputFile)
});



lineReader.on('line', function (line) {
    vertices = [];
    if (line != ''){
        var lastVertex ;
        line.split(" ").forEach(function(name, i){
            var index = nameOfVertexIndexOfArray(name, vertices);
            var vertex;

            if(index > -1){
                vertex = vertices[index];
            }else{
                vertex = new Vertex(name);
                vertices.push(vertex);
            }


            if(i != 0){
                lastVertex.connections.push(vertex);
            }
            lastVertex = vertex;

        });

    }

    var graph = new Graph(vertices);
    var tarjan = new Tarjan(graph);
    var result =tarjan.run();
    var output =result[0].map(function(vertex){
        return vertex.name;
    }).reverse().join(" ");
    console.log(output)

});


function Vertex(name){
    this.name = name || null;
    this.connections = [];

    this.index= -1;
    this.lowlink = -1;
}

Vertex.prototype = {
    equals: function(vertex){
        // equality check based on vertex name
        return (vertex.name && this.name==vertex.name);
    }
};

function nameOfVertexIndexOfArray(name, array){
        for (var i in array){
            if (array[i].name == name){
                return i;
            }
        }
        return -1;
}

function Graph(vertices){
    this.vertices = vertices;
}


function Tarjan(graph){
    this.graph = graph;
    this.stack = new VertexStack();
    this.scc = [];
    this.index = 0;
}

function VertexStack(vertices) {
    this.vertices = vertices || [];
}
VertexStack.prototype = {
    contains: function(vertex){
        for (var i in this.vertices){
            if (this.vertices[i].equals(vertex)){
                return true;
            }
        }
        return false;
    }
};

Tarjan.prototype = {
    run: function(){
        for (var i in this.graph.vertices){
            if (this.graph.vertices[i].index<0){
                this.strongconnect(this.graph.vertices[i]);
            }
        }
        return this.scc;
    },
    strongconnect: function(vertex){
        // Set the depth index for v to the smallest unused index
        vertex.index = this.index;
        vertex.lowlink = this.index;
        this.index = this.index + 1;
        this.stack.vertices.push(vertex);

        // Consider successors of v
        // aka... consider each vertex in vertex.connections
        for (var i in vertex.connections){
            var v = vertex;
            var w = vertex.connections[i];
            if (w.index<0){
                // Successor w has not yet been visited; recurse on it
                this.strongconnect(w);
                v.lowlink = Math.min(v.lowlink,w.lowlink);
            } else if (this.stack.contains(w)){
                // Successor w is in stack S and hence in the current SCC
                v.lowlink = Math.min(v.lowlink,w.index);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (vertex.lowlink==vertex.index){
            // start a new strongly connected component
            var vertices = [];
            var w = null;
            if (this.stack.vertices.length>0){
                do {
                    w = this.stack.vertices.pop();
                    // add w to current strongly connected component
                    vertices.push(w);
                } while (!vertex.equals(w));
            }
            // output the current strongly connected component
            // ... i'm going to push the results to a member scc array variable
            if (vertices.length>0){
                this.scc.push(vertices);
            }
        }
    }
};
