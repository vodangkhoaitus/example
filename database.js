
var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://1512263:munimuni@examplecluster-zn1em.mongodb.net/test?retryWrites=true"

mongo.connect(url, {useNewUrlParser:true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("ExampleDB");
    dbo.collection("Books").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });