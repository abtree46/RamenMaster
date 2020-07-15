var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = [
    {
        routeName: "",
        name: "",
      },
]
var waitList = [
    {
        routeName: "",
        name: "",
       
      },
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
app.get("/api/reservation/:reservation", function (req,res){
    return res.json(reservation);
})

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})

app.get("/api/watilist/:waitlist", function (req, res){
    var listofWaitlist = req.params.waitList
    for (var i = 0; i < waitList.length; i++){
        if (listofWaitlist === waitList[i].routeName){
            return res.json(waitList[i]);
        }
    }
});

app.get("/api/reservation/:reservation", function (req, res){
    var listofReservation = req.params.waitList
    for (var i = 0; i < reservation.length; i++){
        if (listofReservation === reservation[i].routeName){
            return res.json(reservation[i]);
        }
    }
});

app.post("/api/waitlist", function (req, res){
    var newWaitlist = req.body;
    newWaitlist.routeName = newWaitlist.name.replace(/\s+/g,"").toLowercase();
    console.log(newWaitlist);
    waitList.push(newWaitlist);
    res.json(newWaitlist)
})

app.post("/api/reservation", function (req, res){
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g,"").toLowercase();
    console.log(newReservation);
    reservation.push(newReservation);
    res.json(newReservation)
})