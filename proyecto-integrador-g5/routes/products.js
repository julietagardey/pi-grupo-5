var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")
const { body } = require('express-validator');

//Validaciones
// TENEMOS QUE CAMBIAR EL FORMULARIO DE LAS VISTAS POR --> productform y asi...
let validateProduct = [
    body('foto_texto').notEmpty().withMessage('Debes completar el campo foto'),
    body('nombre').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('descripcion').notEmpty().withMessage('Debes completar el campo descripción'),
]

// let validateComment = [
//     body('foto_texto').notEmpty().withMessage('Debes completar el campo foto'),
//     body('nombre').notEmpty().withMessage('Debes completar el campo de nombre'),
//     body('descripcion').notEmpty().withMessage('Debes completar el campo descripción'),
// ]


router.get("/detail/:id", productController.detail)
router.get("/add", productController.add) // muestra formulario 
//Validaciones
router.post('/add', validateProduct, productController.storeProduct); // procesa info del formulario, guarda producto nuevo
// router.post('/addComent', validateComment, productController.storeComment); // procesa info del formulario, guarda comentario nuevo

module.exports = router;