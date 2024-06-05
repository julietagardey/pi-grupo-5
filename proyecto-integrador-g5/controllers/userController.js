const {validateLogin}= require('express-validator');
const {validateResult}= require('express-validator');
const datos = require("../database/models/index");
const User = require('../database/models/User');

// profil, edit profile, register, login
const userController = {
    login: function (req, res) {
        return res.render("login")
    },
    register: function (req, res) {
        return res.render("register")
    },
    profile: function (req, res) {
        return res.render("profile", { usuario: datos.usuario, productos: datos.productos })
    },
    editProfile: function (req, res) {
        return res.render("profile-edit")
    },
    store: function (req, res) {
        let errors = validateLogin(req);
        if (errors.isEmpty()) {
            let user = req.body;
            userId = User.login(user);
            res.redirect('/users' + userId)

        } else {
            res.render('/users/login', {
                errors: errors.array(),
                old: req.body
            })
        }
    },
    store: function (req, res) {
        let errors = validateResult(req);
        if (errors.isEmpty()) {
            let user = req.body;
            userId = User.register(user);
            res.redirect('/users' + userId)

        } else {
            res.render('/users/register', {
                errors: errors.array(),
                old: req.body
            })
        }
    }
};

module.exports = userController;