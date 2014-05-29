var express = require("express"),
    app = express();
    
//Serves anything inside the /public directory using express module
app.use(express.static(__dirname + '/public'));

app.listen(8887);