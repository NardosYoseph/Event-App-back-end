const express=require('express');
const controller=require('../controllers/qr_controller')
const router=express.Router();
const passport= require("../middleware/passport")


router.post('/create',passport.authenticate('jwt', { session: false }),controller.createQr);
router.get('/fetch',passport.authenticate('jwt', { session: false }),controller.fetchQr);


module.exports = router;