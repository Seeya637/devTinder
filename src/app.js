const express=require('express');
const { adminAuth,userAuth } = require('./middlewares/auth');

const app=express();

app.use("/admin",adminAuth);
app.get("/user/login",(req,res)=>{
    res.send("user logged in successfully");
})
app.get("/user",userAuth,(req,res)=>{
    res.send("user data sent");
});

app.get("/admin/getAllData",(req,res)=>{
    res.send("all data sent");
});

app.get("/admin/deleteAllUser",(req,res)=>{
    res.send("delete the user");
});

app.listen(7777,()=>{
        console.log('server is running on port number 7777');
});