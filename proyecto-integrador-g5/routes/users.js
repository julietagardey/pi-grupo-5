var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
let db = require('../database/models/User')
const{body} = require('express-validator');

//Validaciones
// TENEMOS QUE CAMBIAR EL FORMULARIO DE LAS VISTAS POR --> ProfileEdit y asi...
let validateRegister = [
    body('email').isEmail().withMessage("not email")
    .custom(function(value)  {
        //validar que el email exista en la base de datos
        return db.findOne({
        where: {email: value},
    })
        .then(function(user) {
            if(user){
                throw new Error ('El email ingresado ya existe')
            }
        })
    }),
    body('usuario').notEmpty().withMessage('Debes completar el campo Usuario'),
    body('fechaDeNacimiento').isDate().withMessage('Debes completar una fecha válida'),
    body('numeroDeDocumento').isInt().withMessage('Debes completar el campo con un Documento válido'),
    body('fotoPerfil').isString().withMessage('Debes completar el campo Foto Perfil'),
];


let validateLogin = [
    body('email').isEmail().withMessage('Debes completar un email válido')
    // función para findOne del email, si se encuentra el email, hay que comparar email y conraseña se hace con pair...
    .custom(function(value)  {
        //validar que el email exista en la base de datos
        return db.findOne({
        where: {email: value},
    })
        .then(function(user) {
            if(!user){
                throw new Error ('El email ingresado no se encuentra registrado')
            }
        })
    }),
    body('contrasena').notEmpty().withMessage('Debes completar el campo contraseña')
]


/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/editprofile', userController.editProfile);
//Validaciones
router.post('/login', validateLogin, userController.login);
router.post('/register', validateRegister, userController.register)
router.post('/editprofile', validateRegister, userController.editProfile);


module.exports = router;
