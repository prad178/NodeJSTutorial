//Load the fs (filesystem) modue
var fs = require("fs");

//Read the content of the file into memory
fs.readFile("example_log.txt", function(error, logData){
    //If an error occurred, throwing it will
        //display the exception and end our app.
    if(error) throw error;
    
    //Convert logData in a Buffer into String format
    var text = logData.toString();    
    
    //Declare an empty object
    var results = {};
    
    //Breakup the file content into lines
    var lines = text.split("\n");
    
    lines.forEach(function(line){
        var parts = line.split(" ");
        var letter = parts[1];
        var count = parts[2];
        
        if(!letter)
            return;
        
        if(!results[letter]){
            results[letter] = 0;
        }
        
        results[letter] += parseInt(count);
    });
    
    //Print the letters and their total count in console
    console.log(results);
});

