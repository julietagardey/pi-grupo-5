module.exports = function (sequelize, dataTypes) {
    let alias = "Comment"

    let cols = {
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            types: dataTypes.INTEGER,
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.STRING,
        },
        createdAT: {
            type: dataTypes.DATE,
        },
        updatedAT: {
            type: dataTypes.DATE,
        },
        deletedAT: {
            type: dataTypes.DATE,
        },
    }


    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    let Comment = sequelize.define(alias, cols, config)
    return Comment
}