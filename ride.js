const express = require("express")
const app = express()

function isOldEnough(req,res,next){
   age = req.query.age;
   if(age>=14){
    next();
    }
    else{
        res.status(411).json({
            msg: "Sorry! You cannot go to ride1"
        })
    }
}

app.use(isOldEnough)

app.get("/ride1", function(req,res){
        res.json({msg :"You can go to ride 1"})
})

app.get("/ride2", function(req,res){  
        res.json({msg :"You can go to ride 2"})
})

app.listen(3000);