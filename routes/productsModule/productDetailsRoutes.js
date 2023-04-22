const router = require('express').Router();
const productController = require('../../controller/productsController/productsDetailsController')

router.post('/addProducts', productController.addProductsFun);
router.get('/productList', productController.productList)

module.exports = router