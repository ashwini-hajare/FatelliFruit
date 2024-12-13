const usermodel = require('./model')


// post method
const add = async(req, res) => {
    const {name, email, contact, subject, message} = req.body
    try
    {
        const data = new usermodel({
            name, email, contact, subject, message ,   image: req.file.filename,
        })
        const userdata = await data.save()
        res.send({userdata})
    }
    catch(error)
    {
        res.send(error)
    }
}
  
// get method

const getUser = async (req, res) => {
    try {
        const users = await usermodel.find();
        res.send(users);

    } catch (error) {
        res.status(500).send({ message: "Error retrieving users", error: error });
    }
}

// delete method

const deleteuser = async(req, res) => {
    try{
        const data = await usermodel.deleteOne({_id:req.params._id})
            res.status(200).send({data})
    }
    catch(error) {
        res.status(500).send(error)
    }
}





// update method
const updateuser = async (req, res) => {
    const { name, email, contact, subject, message } = req.body;
           
    try {
        
        const data = await usermodel.updateOne(
            { _id : req.params._id },
            {$set: {name, email, contact, subject, message ,  image: req.file.filename } }
        );
        if(data.modifiedCount < 0)
            {
                res.status(200).send({message :"Update data"});
            }
         else{
            res.status(500).send({message :"Data Not Update"});
         }
    } catch (error) {
        res.status(400).send(error);
    }
};



module.exports = {add,getUser,deleteuser,updateuser}