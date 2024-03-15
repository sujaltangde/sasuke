const express = require('express')
const { register, login, isLogin, getLogUser } = require('../controllers/userControllers')
const {isAuthenticated} = require('../middlewares/auth')
const router = express.Router() 


router.route("/register").post(register) ; 
router.route("/login").post(login) ; 
router.route("/isLogin").get(isAuthenticated, isLogin) ; 
router.route("/getLogUser").get(isAuthenticated, getLogUser) ; 


module.exports = router