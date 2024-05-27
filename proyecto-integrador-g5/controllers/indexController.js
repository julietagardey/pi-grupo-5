let db = require('../database/models')
// const datos = require("../db/index");

const indexController = {
    index: function (req, res) {
        return res.send("hola");
        return res.render("index", { productos: datos.productos })
    },
    search: function (req, res) {
        return res.send("hola 2");
        return res.render("search-results", { productos: datos.productos })
    }
};

module.exports = indexController;