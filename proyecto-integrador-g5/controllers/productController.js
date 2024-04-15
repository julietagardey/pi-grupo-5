const datos = require("../db/index")

// index, add (es cuando toco el botón editar)

const productController = {
    detail: function (req, res) {
        var productos = datos.productos
        return res.render("product", { productos: productos })
    },
    add: function (req, res) {
        return res.render("product-add")
    }
};

module.exports = productController;