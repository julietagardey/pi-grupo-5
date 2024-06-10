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
    body('nombre').notEmpty().withMessage('Debes completar el campo Usuario'),
    body('fecha').isDate().withMessage('Debes completar una fecha válida'),
    body('dni').isInt().withMessage('Debes completar el campo con un Documento válido'),
    body('foto_texto').isString().withMessage('Debes completar el campo Foto Perfil'),
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
    body('contrasenia').notEmpty().withMessage('Debes completar el campo contraseña')
]


/* GET users listing. */
router.get('/login', userController.login); // muestra formulario de login
router.get('/register', userController.register); // muestra formulario de register
router.get('/profile/:id', userController.profile);
router.get('/editprofile', userController.editProfile); //muestra formular de editar perfil 
//Validaciones
router.post('/login', validateLogin, userController.storeLogin); // procesa info de form de login
router.post('/register', validateRegister, userController.storeRegister) // procesa info de form de register
router.post('/editprofile', validateRegister, userController.storeEditProfile); // procesa info de form de editar


module.exports = router;
