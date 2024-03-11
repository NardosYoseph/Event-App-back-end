const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_Controller');

router.post('/register', userController.register);

router.post('/login', userController.login);
router.post('/refresh', userController.refreshToken);
router.post('/singleUSer', userController.fetchUserbyID);


module.exports = router;
