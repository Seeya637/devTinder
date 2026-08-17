//main core js file. start of file

const express=require('express');

const app=express();

app.use("/hello",(req,res)=>{
    res.send("hello hello hello hello");
})

app.use("/test",(req,res)=>{
    res.send("hhhhhhelloooooooooooo from the test (request handler)");
})
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...");
});

