var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = [

]

var waitList = [

]


app.get("/", function(req , res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/table", function(req, res){
    res.sendFile(path.join(__dirname, "table.html"))
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"))
})

app.get("/api/watilist", function (req, res){
    return res.json(waitList)
});

app.get("/api/reservation", function (req,res){
    return res.json(reservation);
})





app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})