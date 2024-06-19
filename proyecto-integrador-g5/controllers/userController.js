const { validationResult } = require('express-validator');
// const datos = require("../dbOld/index");
const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require("bcryptjs")

// profil, edit profile, register, login
const userController = {
    login: function (req, res) {
        return res.render("login", { errorcontrasenia: {} })
    },
    register: function (req, res) {
        return res.render("register")
    },
    profile: function (req, res) {
        let idUsuario = req.params.id
        db.User.findByPk(idUsuario, {
            include: [{
                association: "productos",
                include: [{ association: "comentarios" }],
                order: [['created_at', 'DESC']] // Ordena los productos por created_at en orden descendente
            }]
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
        let idUsuario = req.params.id;
        db.User.findByPk(idUsuario)
            .then(function (usuario) {
                if (req.session.usuarioLogueado && req.session.usuarioLogueado.id_usuario == usuario.id_usuario) {
                    // return res.send(usuario)
                    console.log(usuario);
                    return res.render("profile-edit", { usuario: usuario })
                } else {
                    // ESTARÍA BUENO QUE APAREZCA UNA VENTANITA MOSTRANDO EL MENSAJE Y DESPUÉS REDIRIGIRLO
                    return res.send("No es tu perfil")
                }
            })
    },
    storeLogin: function (req, res) {
        let errors = validationResult(req);


        if (errors.isEmpty()) {
            let form = req.body;

            db.User.findOne({
                where: { email: form.email }
            })
                .then(function (usuario) {
                    let check = bcrypt.compareSync(form.contrasenia, usuario.contrasenia);

                    if (!check) {
                        return res.render('login', {
                            errorcontrasenia: {
                                msg: 'La contraseña es incorrecta'
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
            res.render('login', {
                errors: errors.array(),
                old: req.body,
                errorcontrasenia: {}
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
        let errors = validationResult(req);
        // return res.send(errors)
        // return res.send(req.body)
        // return res.send(req.session.usuarioLogueado)
        let idUsuario = req.session.usuarioLogueado.id_usuario;
        if (errors.isEmpty()) {
            let form = req.body;
            //form.id_usuario = req.session.usuarioLogueado.id_usuario;
            
            // return res.send(form)
            if (form.contrasenia) {
                // Encriptar nueva contraseña si se cambia
                form.contrasenia = bcrypt.hashSync(form.contrasenia, 10);
            } else {
                // Eliminar contraseña para no cambiarla
                delete form.contrasenia;
            }
            console.log("Este es el form", form);

            db.User.update(form, { where: [{ id_usuario: idUsuario }] })
                .then(function (result) {
                    req.session.usuarioLogueado = form; 
                    return res.redirect('/users/profile/' + idUsuario);
                })
                .catch(function (e) {
                    console.log(e);
                    // res.status(500).send('Error interno del servidor');
                });
        } else {
            // let idUsuario = req.body.id_usuario;
            db.User.findByPk(idUsuario)
                .then(function (usuario) {
                    res.render('profile-edit', {
                        errors: errors.array(),
                        old: req.body,
                        usuario: usuario // tuve que traer este objeto para que no rompa si hay errores
                    });
                })
        }
    }
};

module.exports = userController;