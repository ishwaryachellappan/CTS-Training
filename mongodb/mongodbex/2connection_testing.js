var mongodbDriver = require("mongodb");
var mongoClient = mongodbDriver.MongoClient;

var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, dbCon) {
  if (err) {
    console.log("Error occured while connecting db");
    return;
  }
  var db = dbCon.db("co44");
  console.log(db);
  dbCon.close();
});
