let express=require("express");
let mongoose = require("mongoose");

let app = express();

let PORT  = 3000;

app.listen(PORT,(req,res)=>{
    console.log("Server is Running on Port " + PORT);
});