const { validateLogin } = require('express-validator');
const { validateRegister } = require('express-validator');
const datos = require("../dbOld/index");
const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require("bcryptjs")

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
        // return res.send(form)
        db.User.findOne({
            where: [{email: form.email}]
        })
        .then(function (usuario) {
            // return res.send(usuario)
            let check = bcrypt.compareSync(form.contrasenia, usuario.contrasenia)
            if (check) {
                req.session.usuarioLogueado = usuario;
            }
            // acá se crea la cookie pero cuando cierro el navegador, se pierde todo me falta el AUTOLOGIN
            if (form.recordarme == "") {
                res.cookie("idUsuario", usuario.id_usuario, {maxAge: 10*60*5})
            }
            return res.redirect("/users/profile/"+ usuario.id_usuario)
        })
        
        // ACÁ HAY QUE VALIDAR QUE EL USUARIO EXISTA EN LA BASE DE DATOS Y QUE CAMBIE EL HEADER, Y TIENEN QUE APARECER AGREGAR PRODUCTO
        
    },
    storeRegister: function (req, res) {
        // SI ERRORS ESTÁ VACÍO, HACEMOS LO QUE VENÍAMOS HACIENDO: CREAR USUARIO, GUARDARLO EN DB Y REDIRIGIR
        // SI ERRORS NO ESTÁ VACÍO (ELSE), LO QUE QUEREMOS HACER ES VOLVER AL FORM Y MANDAR LOS ERRORES A LA VISTA

        // let errors = validateRegister(req);
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
        let contraEncriptada = bcrypt.hashSync(form.contrasenia, 10);
        form.contrasenia = contraEncriptada;
        // return res.send(form)
        db.User.create(form)
        .then(function (result) {
            return res.redirect("/users/login")
        })
        .catch(function (error) {
            console.log(error);
        })
        
    },
    storeEditProfile: function (req, res) {
        // procesar update
    }
};

module.exports = userController;