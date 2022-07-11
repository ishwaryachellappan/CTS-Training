var express = require('express');
var app=express();
app.get("/",function(req,res){
    res.send("Hello World");
})
app.listen(5000,function(err){
    if(!err){
        console.log("Application is started succesfully");
    }
    else{
        console.log("got error");
        console.log(err);
    }
})