const express=require('express');

const app=express();

app.get('/user',(req,res,next)=>{
    console.log("handling the route user!");
    next();
    // res.send("response");
},
(req,res,next)=>{
    console.log("handling the route user 2");
    next();
    // res.send("2 nd response");
},
(req,res,next)=>{
    console.log("handling the route user 3");
     res.send("final response");
     next();
}
)

app.listen('7777',()=>{
        console.log('server is running on port number 7777');
});