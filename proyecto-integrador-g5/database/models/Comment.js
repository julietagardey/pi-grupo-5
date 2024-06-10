module.exports = function (sequelize, dataTypes) {
    let alias = "Comment"

    let cols = {
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
        },
    }


    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    let Comment = sequelize.define(alias, cols, config);
    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "id_producto"
        })

        Comment.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "id_usuario"
        })
    }
    return Comment
}