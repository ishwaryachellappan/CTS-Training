var mongodbDriver = require("mongodb");
var mongoClient = mongodbDriver.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, dbCon) {
  if (err) {
    console.log("Error occurred while connecting Mongodb");
    return;
  }
  var db = dbCon.db("co44");
  db.collection("emps")
    .find({}, {})
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      }
    });
});
