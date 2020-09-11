var mysql = require('mysql')
var express = require('express')

var app = express();

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});

app.post('/api/signin', function(req, res) {
    const username = req.body.username;
    const mnumber = req.body.mnumber;
    // const email = req.body.email;



  connection.query(`INSERT INTO usertest2 SET username = ? , mnumber= ? `, [username , mnumber] ,  function(err, result) {

  console.log(username);
  if (err) throw err;
      res.send(' successfully');

    });


  });