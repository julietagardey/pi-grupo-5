var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
const{body} = require('express-validator');
const controller = require('../controllers/productController')

//Validaciones
// TENEMOS QUE CAMBIAR EL FORMULARIO DE LAS VISTAS POR --> productform y asi...
const validateProductform = [
    body('email').isEmail().withMessage('Debes completar un email válido'),
    body('usuario').notEmpty().withMessage('Deber completar el campo Usuario'),
    body('fechaDeNacimiento').isDate().withMessage('Deber completar el campo Fecha de Nacimiento'),
    body('numeroDeDocumento').isNumeric().withMessage('Deber completar el campo Numero de Documento'),
    body('fotoPerfil').notEmpty().withMessage('Deber completar el campo Foto Perfil'),
]


router.get("/detail/:id", productController.detail)
router.get("/add", productController.add)

module.exports = router;