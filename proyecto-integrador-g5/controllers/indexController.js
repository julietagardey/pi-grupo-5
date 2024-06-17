const db = require("../database/models");
// const datos = require("../dbOld/index")
const op = db.Sequelize.Op;

const indexController = {
    index: function (req, res) {
        db.Product.findAll({
            order: [
                ["created_at", "DESC"]
            ],
            include: [{ association: "comentarios" }, { association: "usuario" }]
        })
            .then(function (productos) {
                // return res.send(productos)
                return res.render("index", { productos: productos })
            })
            .catch(function (e) {
                console.log(e);
            })
        // return res.render("index", { productos: datos.productos })
    },
    search: function (req, res) {
        let busquedaProducto = req.query.search;
        // return res.send(busquedaProducto)
        db.Product.findAll({
            // EL OPERADOR OR 
            where: {
                [op.or]: [
                { nombre: { [op.like]: `%${busquedaProducto}%` } },
                { descripcion: { [op.like]: `%${busquedaProducto}%` } }
            ]
        },
            order: [
                ["created_at", "DESC"]
            ],
            include: [{ association: "comentarios" }, { association: "usuario" }]
        })
            .then(function (productos) {
                // return res.send(productos)
                return res.render("search-results", { productos: productos })
            })
            .catch(function (e) {
                console.log(e);
            })
    }
};

module.exports = indexController;