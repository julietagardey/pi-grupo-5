var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
const{body} = require('express-validator');
const controller = require('../controllers/productController')

//Validaciones
// TENEMOS QUE CAMBIAR EL FORMULARIO DE LAS VISTAS POR --> productform y asi...
let validateProduct = [
    body('image').notEmpty().withMessage('Debes completar el campo foto'),
    body('nombre').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('descripcion').notEmpty().withMessage('Debes completar el campo descripción'),
]


router.get("/detail/:id", productController.detail)
router.get("/add", productController.add)
//Validaciones
router.post('/add', validateProduct, productController.add);

module.exports = router;