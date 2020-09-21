var express = require("express")
var http = require("http")
var data = require("./data")
// var users = require("./users")
// var mysql = require("mysql")
// var cors = require('cors')



const app = express()
// app.use(cors)

app.get("/api/products", (req ,res)=>{
  res.send(data.products)
})

app.listen(5000, () =>{console.log(data.products)})
