const router = require('express').Router();
const sellerController = require('../../controller/sellerController/sellerController')

router.post('/sellerSignUpData', sellerController.sellerdataStore)



module.exports = router