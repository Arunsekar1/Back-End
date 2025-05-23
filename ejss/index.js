const express = require('express')
const app = express()

app.set('view engine','ejs')


const Name = []



const body = require('body-parser')

app.use(body.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('one',{user:Name})
})

app.post('/',(req,res)=>{
        Name.push(req.body.user)
        res.redirect('/')
})

app.listen(900,console.log('runing...'))


