const datos = require("../db/index");

const indexController = {
    index: function (req, res) {
        return res.render("index")
    },
    search: function (req, res) {
        return res.render("search-results")
    }
};

module.exports = indexController;