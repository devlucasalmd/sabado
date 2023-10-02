const router = require('express').Router()
const multer = require('multer');
const userController = require('../controllers/UserController')
const crypto = require('crypto')

function generateNumericHash(input) {
    const md5Hash = crypto.createHash('md5').update(input.toString()).digest('hex');
    const numericHash = md5Hash.replace(/[a-f]/gi, ''); // Remove non-numeric characters
    return numericHash;
  }

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"src/uploads")
    },
    filename:  async function (req,file,cb) {
        
        const timestamp = Date.now().toString();
        const numericHash = generateNumericHash(timestamp);
        cb(null, `${numericHash}-${file.originalname}`)
    }
})

const upload = multer({
    storage,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg|JPEG|PNG)$/)){
            return cb(Error("é permitido apenas arquivos png ou jpg"))
        }
        cb(null,true)
    }
})

router.post('/register',upload.single("image"),userController.RegisterUser)
module.exports  = router