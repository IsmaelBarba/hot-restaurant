var express =  require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3200;

// body parser is for=
// body parser take the data that we are submitting to the server
// parse is just reading, trying to read in a format that we can understand.
// so body parser what it does is what ever the request is coming from the client.
// it parses out and can read that object and converts to a json format
// body of the request that goes from client to the server that is being parsed. 
// the partion below with bodyParser is happining at the server, no the client.
//"req" is the request that goes to the server. It is always on the request going up to the server
// "res" is the response that goes from server to the client.
// "req.body" with be created by body parser
app.use(bodyParser.urlencoded({
    extend: false
}));

app.use(bodyParser.json());



app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "add.html"));
});

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});