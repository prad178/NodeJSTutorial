//Require new parser.js
var Parser = require("./parser.js"),
    fs = require("fs");

fs.readFile("example_log.txt", function(error, logData){
    if(error)
        throw error;
    
    var text = logData.toString();
    
    //Use Parser module to parse the data
    var parser = new Parser();
    
    console.log(parser.parse(text));
});