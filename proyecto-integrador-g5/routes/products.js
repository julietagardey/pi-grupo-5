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

let validateComment = [
    body('texto').notEmpty().withMessage('Debes completar el campo texto')
        .bail().isLength({ min: 3 }).withMessage("El comentario tiene que tener un mínimo de 3 caracteres")
]


router.get("/detail/:id", productController.detail)
router.get("/add", productController.add) // muestra formulario para agregar productos
router.get("/editProduct/:id", productController.edit) // muestra formulario para editar productos
//Validaciones
router.post('/add', validateProduct, productController.storeProduct); // procesa info del formulario, guarda producto nuevo
router.post("/update", validateProduct, productController.updateProduct) // modifica producto
router.post("/delete", productController.deleteProduct) // eliminar producto
router.post('/addComment', validateComment, productController.storeComment); // procesa info del formulario, guarda comentario nuevo

module.exports = router;