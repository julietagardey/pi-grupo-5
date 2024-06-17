let db = require('../database/models');
const op = db.Sequelize.Op;

// const datos = require("../index")

// index, add (es cuando toco el botón editar)

let productController = {
    detail: function (req, res) {
        let idProduct = req.params.id
        // no está funcionando lo del id --> hay algo mal en la ruta de detail que no me toma el id 
        db.Product.findByPk(idProduct, {
            include:
                [{ association: "usuario" },
                { association: "comentarios", include: [{ association: "usuario" }] }]
        })
            .then(function (producto) {
                // return res.send(producto)
                return res.render("product", { producto: producto })
            })
            .catch(function (error) {
                return console.log(error);
            })
        //var productos = db.productos
        //return res.render("product", { productos: productos })
    },
    add: function (req, res) {
        // CONTROLES DE ACCESO
        if (req.session.usuarioLogueado == undefined) {
            return res.redirect("/users/register")
        } else {
            return res.render("product-add")
        }
    },
    // addComment:function (req, res) {
    //     // CONTROLES DE ACCESO
    //     if (req.session.usuarioLogueado == undefined) {
    //         return res.redirect("/users/register")
    //     } else {
    //         return res.render("comment-add")
    //     }
    // },
    storeProduct: function (req, res) {

        // return res.send(req.body)
        let form = req.body
        form.id_usuario = req.session.usuarioLogueado.id_usuario
        // form.foto_texto = "/images/products/" + req.body.foto_texto
        // return res.send(form)
        db.Product.create(form)
            .then(function (result) {
                return res.redirect("/")
            })
            .catch(function (e) {
                console.log(e);
            })
    },
    // storeComment: function(req, res) {
    //     let form = req.body
    //     form.id_usuario = req.session.usuarioLogueado.id_usuario
    //     db.Comment.create(form)
    //         .then(function(result){
    //             return res.redirect("/products/detail")
    //         })
    //         .catch(function(e){
    //             console.log(e)
    //         })
    // },
    edit: function (req, res) {
        let idProducto = req.params.id;
        db.Product.findByPk(idProducto)
            .then(function (producto) {
                return res.render("updateProducto", {producto: producto})
            })
    },
    updateProduct: function (req, res) {
        let form = req.body;
        // return res.send(form)
        db.Product.update(form, {where: [{id_producto: form.id_producto}]})
            .then(function (result) {
                return res.redirect("/products/detail/" + form.id_producto)
            })
            .catch(function (e) {
                console.log(e);
            })
    },
    deleteProduct: function (req, res) {
        let idProducto = req.body.id_producto;
        let filtro = {
            where: [{ id_producto: idProducto }]
        }
        db.Product.destroy(filtro)
            .then(function (params) {
                return res.redirect("/")
            })
            .catch(function (e) {
                console.log(e);
            })
    }
};
    

module.exports = productController;