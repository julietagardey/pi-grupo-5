const {validateLogin}= require('express-validator');
const {validateResult}= require('express-validator');
const datos = require("../dbOld/index");
const db = require('../database/models');
const op = db.Sequelize.Op;

// profil, edit profile, register, login
const userController = {
    login: function (req, res) {
        return res.render("login")
    },
    register: function (req, res) {
        return res.render("register")
    },
    profile: function (req, res) {
        let idUsuario = req.params.id
        db.User.findByPk(idUsuario, {
            include: [{association: "productos", include: [{association: "comentarios"}]}]
        })
        .then(function (usuario) {
            //return res.send(usuario)
            return res.render("profile", {usuario: usuario})
        })
        .catch(function (e) {
            console.log(e);
        })
        // return res.render("profile", { usuario: datos.usuario, productos: datos.productos })
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