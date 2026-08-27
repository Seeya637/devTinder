//main core js file. start of file

const express=require('express');

const app=express();

let user={ firstname:'Akshay', lastname:'saini'};

app.get("/user",(req,res)=>{
    res.send({firstname:"Akshay",lastname:"Saini"});
});

app.post("/user",(req,res)=>{
    res.send("data successfully saved to database!");
});

app.delete("/user",(req,res)=>{
    res.send("data successfully deleted from database")
});


app.patch("/user",(req,res)=>{
    res.send({})
})
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...");
});

