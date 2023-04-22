const multer = require('multer')
const ProductsModal = require('../../modal/productsModal/productsModal')
const jwt = require('jsonwebtoken')

const Storage = multer.diskStorage({
    destination: 'imgUploads',
    filename: (req,file, cb) => {
        cb(null,Date.now() + '-' + file.originalname)
    }
})
const upload = multer({
    storage: Storage
}).single('testImage')
let addProductsFun = (req, res) => {
    upload(req, res, (err) =>{
        if(err){
            console.log(err);
        } else {
            let newImage = new ProductsModal({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save().then(() => res.send('successfully uploaded')).catch(err => {
                console.log(err);
            })
        }
    })
}

let productList = (req, res)=> {
    const authHeader = req.headers.authorization;
    console.log(authHeader, "auth header");
    if(!authHeader){
        return res.status(401).json({message: "Missing Authorization header"})
    }
    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token, 'secret')
        const {userName}= decode;
        res.json({ message: `Hello ${userName}! This is a protected endpoint.` });
    } catch(err){
        res.status(401).json({ message: 'Invalid or expired token' });
    }
    ProductsModal.find().then(response => {
        res.send(response)
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {addProductsFun, productList}