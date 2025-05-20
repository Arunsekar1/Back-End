const http = require('http')
// http.createServer((req,res)=>{
//     res.write('<h1>Hello Suryraj</h1>')
//     res.end()
// }).listen(900,console.log('runing,,,,'))


// new

http.createServer((req,res)=>{
    res.write('<h1>Hello I am 900 Page<h1>')
    res.write('<a href = "http://localhost:800">click me</a>')
    res.end()
}).listen(900,console.log("900 page working..."))

http.createServer((req,res)=>{
    res.write('<h1>Hello I am 800 Page</h1>')
    res.write('<a href = "http://localhost:900">Clike here</a>')
    res.end()
}).listen(800,console.log("800 page running..."))