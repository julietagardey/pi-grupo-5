var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
const{body} = require('express-validator');
const controller = require('../controllers/userController')

//Validaciones
// TENEMOS QUE CAMBIAR EL FORMULARIO DE LAS VISTAS POR --> Loginform y asi...
const validateLoginform = [
    body('email').isEmail().withMessage('Debes completar un email válido')
]


/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.profile);
router.get('/editprofile', userController.editProfile);

module.exports = router;
