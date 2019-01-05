var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://1512263:munimuni@examplecluster-zn1em.mongodb.net/test?retryWrites=true"

const http = require('http');

const port=process.env.PORT || 3000


  
const server = http.createServer((req, res) => {

//res.statusCode = 200;

//res.setHeader('Content-Type', 'text/html');
mongo.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ExampleDB");
    dbo.collection("Books").find({}).toArray(function(err, result) {
      if (err) throw err;
      else{
          console.log(result);
      console.log('ket noi thanh cong!');
      
      result.forEach(function(result){
          res.write("<p>" + JSON.stringify(result) + "</p>\n")
      }
      )
      }
      db.close();
      res.end();
    });
  });

//res.end('<h1>Hello World</h1>');

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});