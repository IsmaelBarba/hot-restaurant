// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;


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

//====================================================================

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//(DATA)
// =============================================================
var allTables = []; // stores the reservations;

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});



// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });

// // Create New Characters - takes in JSON input
// app.put("/api/new", function(req, res) {
//   var newcharacter = req.body;

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });
// Start The Server
// =============================================================

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});