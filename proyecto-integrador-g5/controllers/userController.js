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
    storeLogin: function (req, res) {
        // let errors = validateLogin(req);
        // if (errors.isEmpty()) {
        //     let user = req.body;
        //     userId = User.login(user);
        //     res.redirect('/users' + userId)

        // } else {
        //     res.render('/users/login', {
        //         errors: errors.array(),
        //         old: req.body
        //     })
        // }
        let form = req.body;
        //return res.send(form)
        db.User.findOne({
            where: [{email: form.email}]
        })
        .then(function (usuario) {
            // return res.send(usuario)
            req.session.usuarioLogueado = usuario.nombre;
            return res.redirect("/")
            // let usuarioLogueado = req.session.usuarioLogueado;
        })
        
        // ACÁ HAY QUE VALIDAR QUE EL USUARIO EXISTA EN LA BASE DE DATOS Y QUE CAMBIE EL HEADER, Y TIENEN QUE APARECER AGREGAR PRODUCTO
        
    },
    storeRegister: function (req, res) {
        // let errors = validateResult(req);
        // if (errors.isEmpty()) {
        //     let user = req.body;
        //     userId = User.register(user);
        //     res.redirect('/users' + userId)

        // } else {
        //     res.render('/users/register', {
        //         errors: errors.array(),
        //         old: req.body
        //     })
        // }
        let form = req.body;
        db.User.create(form)
        .then(function (result) {
            return res.redirect("/users/login")
        })
        .catch(function (error) {
            console.log(error);
        })

        db.User.findOne({
            where: [{email: form.email}]
        })
        .then(function (usuario) {
            req.session.usuarioLogueado = usuario.nombre;
            // let usuarioLogueado = req.session.usuarioLogueado;
        })
        
    },
    storeEditProfile: function (req, res) {
        // procesar update
    }
};

module.exports = userController;