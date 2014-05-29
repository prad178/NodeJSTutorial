//Create Parser Constructor
function Parser(){
    
}

Parser.prototype.parse = function(text){
    var results = {};
    
    // Break up the file into lines.
    var lines = text.split('\n');
    
    lines.forEach(function(line) {
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);
        
        if(!letter)
            return;
        
        if(!results[letter]) {
            results[letter] = 0;
        }
        
        results[letter] += parseInt(count);
    });
      
    return results;
};

//Export the Parser constructor from the module
module.exports = Parser;