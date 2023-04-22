const router = require('express').Router();
const sellerController = require('../../controller/sellerController/sellerController')

router.post('/sellerSignUpData', sellerController.sellerdataStore);
router.post('/sellerLoginData', sellerController.sellerLoginCheck)



module.exports = router