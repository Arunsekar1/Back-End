const express  = require('express')
const app = express()


app.get('/',(req,res)=>{
    // res.send('welcomer....')
    res.sendFile('./a.html',{root:__dirname})

})

app.get('*',(req,res)=>{
    res.send("404!")
})

app.listen(700,()=>{console.log("runing...");})

 
