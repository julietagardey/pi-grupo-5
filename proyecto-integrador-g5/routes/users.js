var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
let db = require('../database/models')
const{body} = require('express-validator');
const { render } = require('ejs');

//Validaciones
let validateRegister = [
    body('email').isEmail().withMessage("Debes completar un email válido")
    .custom(function(value){
        return db.User.findOne({
        where: {email: value }
    })
        .then(function(user) {
            if(user){
                throw new Error ('El email ingresado ya existe')
            }
        })
    }),
    body('nombre').notEmpty().withMessage('Debes completar el campo Usuario'),
    body('contrasenia').notEmpty().withMessage('Debes completar el campo contraseña')
    .bail().isLength({ min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
    body('fecha').isDate().withMessage('Debes completar una fecha válida'),
    body('dni').isInt().withMessage('Debes completar el campo con un Documento válido'),
    body('foto_texto').isString().withMessage('Debes completar el campo Foto Perfil'),
];


let validateLogin = [
    body('email').isEmail().withMessage('Debes completar un email válido')
    // función para findOne del email, si se encuentra el email, hay que comparar email y conraseña se hace con pair...
    .custom(function(value)  {
        //validar que el email exista en la base de datos
        return db.User.findOne({
        where: {email: value},
    })
        .then(function(user) {
            if(!user){
                throw new Error ('El email ingresado no se encuentra registrado')
            }
        })
    }),
    body('contrasenia').notEmpty().withMessage('Debes completar el campo contraseña')
    .bail().isLength({ min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres')
];

// let validateEditProfile = [
//     body('email').isEmail().withMessage("Debes completar un email válido"),
//     body('nombre').notEmpty().withMessage('Debes completar el campo Usuario'),
//     body('contrasenia').notEmpty().withMessage('Debes completar el campo contraseña')
//     .bail().isLength({ min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
//     body('fecha').isDate().withMessage('Debes completar una fecha válida'),
//     body('dni').isInt().withMessage('Debes completar el campo con un Documento válido'),
//     body('foto_texto').isString().withMessage('Debes completar el campo Foto Perfil'),
// ];


/* GET users listing. */
router.get('/login', userController.login); // muestra formulario de login
router.get('/register', userController.register); // muestra formulario de register
router.get('/profile/:id', userController.profile);
router.get('/editprofile', userController.editProfile); //muestra formular de editar perfil 
//Validaciones
router.post('/login', validateLogin, userController.storeLogin); // procesa info de form de login
router.post('/register', validateRegister, userController.storeRegister) // procesa info de form de register
router.post('/editprofile', validateRegister, userController.storeEditProfile); // procesa info de form de editar
router.post('/logout', (req, res) => {
    // Elimina la sesión del usuario
    req.session.destroy(() => {
        res.clearCookie('emailUsuario'),
        res.redirect('/')
    });
});


module.exports = router;