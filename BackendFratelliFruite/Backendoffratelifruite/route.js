const express = require('express');
const {add,getUser,deleteuser,updateuser} = require('./controller')

const route = express.Router()

// multer file
const {photoUpload} = require('./fileUpload')


route.post('/register',photoUpload, add) 

// route.post('/register',add)

route.get('/getdata',getUser)

route.delete('/deletedata/:_id',deleteuser)

route.put('/update/:_id', photoUpload,updateuser)

// route.put('/updatedata/:_id',updateuser)

module.exports =route



