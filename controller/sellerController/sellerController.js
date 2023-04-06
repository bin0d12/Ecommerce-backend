const sellerModal = require('../../modal/sellerModule/sellerModal')

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

module.exports = { sellerdataStore}