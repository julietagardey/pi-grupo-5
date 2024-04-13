const datos = require("../db/index");

// profil, edit profile, register, login
const userController = {
    login: function (req, res) {
        return res.render("login")
    },
    register: function (req, res) {
        return res.render("register")
    },
    profile: function (req, res) {
        return res.render("profile")
    },
    editProfile: function (req, res) {
        return res.render("profile-edit")
    }
};

module.exports = userController;