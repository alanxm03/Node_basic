const express = require('express')
const app = express();
app.use(express.static("./Public"))



app.get('/login',(req,res) => {
    res.sendFile(__dirname+"/views/index.html")
})
app.get('/Welcome',(req,res) => {
    res.sendFile(__dirname+"/views/user.html")
})
app.get('/Todo',(req,res) => {
    res.sendFile(__dirname+"/views/notes.html")
})
app.listen(3000,()=>console.log("Listening to Port 3000.."));
