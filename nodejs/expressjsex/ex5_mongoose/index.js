var express=require('express')
var mongose=require('.db/db')
var app=express();
app.use(express.json())
app.get("/",function(req,res){
    res.send("hello application")
})
app.use(require('./routes/employees_routes'))
app.listen(5000,function(err){
    if(!errr){
        console.log("application is started succsesfully");

    }
    else{
        console.log("got error");
        console.log(err);
    }
})   