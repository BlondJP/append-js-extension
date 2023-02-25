import express from "express";
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Welcome in the family');
});
app.listen(port, function () {
    console.log("Family presents server running on port ".concat(port));
});
