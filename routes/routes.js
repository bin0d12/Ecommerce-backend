const router = require('express').Router();
const controller = require('../controller/controller')

router.post('/userDataStore', controller.storeUserData)
router.post('/authCheck', controller.getUserData)


module.exports = router
