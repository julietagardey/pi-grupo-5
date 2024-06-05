let db = require('../database/models/Product');

// const datos = require("../index")

// index, add (es cuando toco el botón editar)

let productController = {
    detail: function (req, res) {
        let idProduct = req.params.id
        // no está funcionando lo del id --> hay algo mal en la ruta de detail que no me toma el id 
        db.findByPk(idProduct)
            .then(function (data) {
                return res.send(data)
            })
            .catch(function(error) {
                return console.log(error);
            })
        //var productos = db.productos
        //return res.render("product", { productos: productos })
    },
    add: function (req, res) {
        return res.render("product-add")
    }
};

module.exports = productController;