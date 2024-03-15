const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_Controller');
const passport= require("../middleware/passport")


router.post('/register', userController.register);

router.post('/login', userController.login);
router.post('/refresh',passport.authenticate('jwt', { session: false }), userController.refreshToken);
router.post('/singleUser',passport.authenticate('jwt', { session: false }), userController.fetchUserbyID);


module.exports = router;
