const express = require ("express");
const app = express();
const mongoose = require('mongoose');

// cors full (cross origin resourse sharing)
const cors = require('cors')

app.use(cors());

// server upload images
app.use('/',express.static('Images'))


mongoose.connect("mongodb://localhost:27017/fratellifruitesproject")


.then(()=>console.log("Connected to db"))


.catch((error) =>console.log(error))

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Runing on port 8000")
})

const route = require('./route')
app.use('/',route)

app.listen(8000, () => {
    console.log('app listening on port 8000')
})