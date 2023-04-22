const sellerModal = require('../../modal/sellerModule/sellerModal')
const jwt = require('jsonwebtoken')
const secretKey = 'mysecretkey';
let sellerdataStore = (req, res) => {
    console.log(req.body);
    let sellerSignUpData = new sellerModal({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    sellerSignUpData.save();
    res.send({
        message: "signup successfully"
    })
}
let sellerLoginCheck = (req, res) =>{
    console.log(req.body);
    let sellerCredentialDetails = {
        email: req.body.email,
        password: req.body.password
    }
  const token = jwt.sign({userDetails}, secretKey)

    // let email = req.body.email
    // let password = req.body.password
    sellerModal.findOne({email: sellerCredentialDetails.email, password: sellerCredentialDetails.password}).then(response => {
        res.send({
            token
            // response
        })
    }).catch(error => {
        res.json({
            message: "error in find indexxxx"
        })
    })
}

module.exports = { sellerdataStore, sellerLoginCheck}