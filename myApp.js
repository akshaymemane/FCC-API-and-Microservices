var express = require('express');
var app = express();
require('dotenv').config();

//1
console.log("Hello World");

//7
app.use((req,res,next)=>{
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

//2
// app.get("/",(req,res)=>{
//     res.send("Hello Express");
//   });

//3
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
  });

//4
app.use('/public', express.static(__dirname + '/public'));

//5
// app.get("/json",(req,res)=>{
//     res.json({"message": "Hello json"});
// });

//6
app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
});

//8
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send({"time":req.time});
});
























 module.exports = app;