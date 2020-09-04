var express = require("express")
// var http = require("http")
var data = require("./data")
const app = express()

// const server =http.createServer((req,res)=>{
//     res.send(data);
//     res.end()
// })

app.get("/api/products", (req,res)=>{
    res.send(data.products)
})

app.listen(5000,() => console.log(data));


