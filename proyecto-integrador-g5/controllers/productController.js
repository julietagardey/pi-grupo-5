let db = require('../database/models');
const op = db.Sequelize.Op;

// const datos = require("../index")

// index, add (es cuando toco el botón editar)

let productController = {
    detail: function (req, res) {
        let idProduct = req.params.id
        // no está funcionando lo del id --> hay algo mal en la ruta de detail que no me toma el id 
        db.Product.findByPk(idProduct, {
            include: 
            [{association: "usuario"}, 
            {association: "comentarios", include: [{association: "usuario"}]}]
        })
            .then(function (producto) {
                //return res.send(producto)
                return res.render("product", {producto: producto})
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