const { validationResult } = require('express-validator');
// const datos = require("../dbOld/index");
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
            include: [{ association: "productos", include: [{ association: "comentarios" }] }],
        })
            .then(function (usuario) {
                //return res.send(usuario)
                return res.render("profile", { usuario: usuario })
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
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let form = req.body;

            db.User.findOne({
                where: { email: form.email }
            })
                .then(function (usuario) {
                    if (!usuario) {
                        return res.render('login', {
                            errors: {
                                email: {
                                    msg: 'Usuario no encontrado'
                                }
                            },
                            old: req.body
                        });
                    }

                    let check = bcrypt.compareSync(form.contrasenia, usuario.contrasenia);

                    if (!check) {
                        return res.render('login', {
                            errors: {
                                contrasenia: {
                                    msg: 'Contraseña incorrecta'
                                }
                            },
                            old: req.body
                        });
                    }

                    req.session.usuarioLogueado = usuario;

                    if (form.recordarme == "") {
                        res.cookie("emailUsuario", usuario.email, { maxAge: 10 * 60 * 5 * 1000 }); // Duración en milisegundos
                    }

                    return res.redirect("/users/profile/" + usuario.id_usuario);
                })
                .catch(function (error) {
                    console.error("Error al buscar usuario:", error);
                    return res.status(500).send("Error interno del servidor");
                });
        } else {
            return res.render('login', {
                errors: errors.array(),
                old: req.body
            });
        }
    },
    storeRegister: function (req, res) {
        // SI ERRORS ESTÁ VACÍO, HACEMOS LO QUE VENÍAMOS HACIENDO: CREAR USUARIO, GUARDARLO EN DB Y REDIRIGIR
        // SI ERRORS NO ESTÁ VACÍO (ELSE), LO QUE QUEREMOS HACER ES VOLVER AL FORM Y MANDAR LOS ERRORES A LA VISTA

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let form = req.body;
            let contraEncriptada = bcrypt.hashSync(form.contrasenia, 10);
            form.contrasenia = contraEncriptada;
            // return res.send(form)
            db.User.create(form)
                .then(function (result) {
                    return res.redirect("login")
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            res.render('register', {
                errors: errors.array(),
                old: req.body
            })
        }
    },
    storeEditProfile: function (req, res) {
        // procesar update
    }
};

module.exports = userController;