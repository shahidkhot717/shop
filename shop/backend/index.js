var express = require("express")
// var http = require("http")
var data = require("./data")
// var users = require("./users")
var mysql = require("mysql")
var cors = require('cors')
const app = express()
app.use(cors)

// const server =http.createServer((req,res)=>{
//     res.send(data);
//     res.end()
// })
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user'
});

app.post('/api/signin', function(req, res) {
    const username = req.body.username;
    const mnumber = req.body.mnumber;
    // const email = req.body.email;



  connection.query(`INSERT INTO login SET username = ? , mnumber= ? `, [username , mnumber] ,  function(err, result) {

  console.log(username);
  if (err) throw err;
      res.send(' successfully');

    });


  });

app.listen(5000,() => console.log(`listing on 5000`));


