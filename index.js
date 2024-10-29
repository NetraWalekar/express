const express = require('express');
const app  = express();

const users = [{
    name : 'john',
    kidneys : [{
        healthy:true
    }]
}]

app.use(express.json());

app.get('/', function(req,res){
    const johnkidneys = users[0].kidneys;
    const totalkidneys = johnkidneys.length;
    let nohealthykidneys = 0;
    for(let i =0;i<totalkidneys;i++){
        if(johnkidneys[i].healthy){
            nohealthykidneys += 1;
        }
    }

    let nounhealthykidneys = totalkidneys -1;
    res.json({
        totalkidneys,
        nohealthykidneys,
        nounhealthykidneys
    })
})

app.post('/', function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg : 'done'
    })
})

app.put('/', function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

app.delete('/', function(req,res){
    let newkidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    res.json({
        msg : 'done'
    })
})
app.listen(3000);