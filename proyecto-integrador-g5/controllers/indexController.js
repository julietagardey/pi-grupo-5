const datos = require("../database/models");

const indexController = {
    index: function (req, res) {
        return res.render("index", { productos: datos.productos })
    },
    search: function (req, res) {
        return res.render("search-results", { productos: datos.productos })
    }
};

module.exports = indexController;