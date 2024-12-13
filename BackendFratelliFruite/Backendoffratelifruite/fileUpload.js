const multer = require('multer')
const path = require('path')

const photoStorage = multer.diskStorage({
    destination : ( req, file, cd) => {
        cd(null,path.join(__dirname,'./Images'))
    },
    filelname: (req, file, cd) => {
        cd(null,file.originallname)
    }
})

const photoUpload = multer({
    storage:photoStorage,
    limits: { fileSize: 5 * 1024 * 1024 *1024 },
}).single('image');

module.exports = {photoUpload}