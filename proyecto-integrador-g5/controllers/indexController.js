const db = require("../database/models");
const datos = require("../dbOld/index")
const op = db.Sequelize.Op;

const indexController = {
    index: function (req, res) {
        db.Product.findAll({
            order: [
                ["created_at", "DESC"]
            ],
            include: [{association: "comentarios"}, {association: "usuario"}]
        })
            .then(function (productos) {
            // return res.send(productos)
                return res.render("index", {productos: productos})
            })
            .catch(function (e) {
                console.log(e);
            })
        // return res.render("index", { productos: datos.productos })
    },
    search: function (req, res) {
        return res.render("search-results", { productos: db.productos })
    }
};

module.exports = indexController;