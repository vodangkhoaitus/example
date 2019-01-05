var mongo = require('mongodb').MongoClient;
var url = "mongodb://1512263:munimuni@examplecluster-shard-00-00-zn1em.mongodb.net:27017,examplecluster-shard-00-01-zn1em.mongodb.net:27017,examplecluster-shard-00-02-zn1em.mongodb.net:27017/test?ssl=true&replicaSet=ExampleCluster-shard-0&authSource=admin&retryWrites=true"

mongo.connect(url,, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ExampleDB");
    dbo.collection("Books").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });