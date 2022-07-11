var mongose=require('mongose');
const url = 'mongodb://localhost:27017'
mongose.connect(url)
.then(result=> {
    console.log("db is connected succesfully")
})
.catch(err=>{
    console.log("getting error")
})

module.exports=mongose;
 
