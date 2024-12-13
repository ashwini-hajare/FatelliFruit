const mongoose= require('mongoose')

const aprojectSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:String,
  
    subject:String,
    message:String ,
    image:String,
})
module.exports = mongoose.model('user',aprojectSchema)
// user collection(table name)
