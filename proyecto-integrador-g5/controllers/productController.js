let db = require('../models/Product')

const datos = require("../db/index")

// index, add (es cuando toco el botón editar)

let productController = {
    detail: function (req, res) {
        db.Product.findAll()
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