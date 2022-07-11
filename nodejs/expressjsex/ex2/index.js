var express = require('express');
var app=express();
app.use(express.json())
var empList=[
    {
        id:1,
        name:"Ishu",
        job:"Programer",
        email:"Ishu@gmail.com",
        salary:65000

    },
    {
        id:2,
        name:"Ishwarya",
        job:"Programer",
        email:"Ishwwarya@gmail.com",
        salary:65000 
    }
]
app.get("/",function(req,res){
    res.send("Hello World");
})
app.get("/employees",function(req,res){
    res.send(empList);
})
app.get("/employees/:id",function(req,res){
    var { params }=req;
    console.log("params: ", params);
    res.send(empList);

})
app.delete("/employees/:id",function(req,res){
    var {  params }=req;
    console.log("params: ", params);
    console.log("body: ", body);
    let { id }=params;
    var filteredEmps =empList.filter(emp=>emp.id !=id)
    if(filteredEmps.length>0)
       res.send(filteredEmps[0])
    else
       res.send("record is not found"+id)
    
})
app.post("/employees",function(req,res){
    var body=req.body;
    console.log("body: ", body);
    if(body)
       empList.push(body)
    res.send("record is created suucesfully")
    
})

app.delete("/employees/:id",function(req,res){
    var { body, params }=req;
    console.log("params: ", params);
    console.log("body: ", body);
    let { id }=params;
    var filteredEmps =empList.filter(emp=>emp.id !=id)
    if(filteredEmps.length>0)
       res.send(filteredEmps[0])
    else
       res.send("record is not found"+id)
      
})
app.put("/employees/:id",function(req,res){
    var { body, params }=req;
    var{id}=params;
    
    var filteredEmps =empList.filter(emp=>emp.id !=id)
    var oldEmp=filtererdEmps[0]
    var newEmp=newEmp.name
    oldEmp.name=newEmp.name
    oldEmp.job=newEmp.job
    oldEmp.email=newEmp.email 
    oldEmp.salary=newEmp.salary
    if(filteredEmps.length>0)
       res.send.json({
        "status":"success",
        "message":"record is updated",
        "modified object":newEmp
       }) 
       
    else
       res.send("record is not found"+id)  
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