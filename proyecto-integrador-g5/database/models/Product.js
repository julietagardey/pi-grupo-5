module.exports = function (sequelize, dataTypes) {
    let alias = "Product"

    let cols = {
        id_producto: {
            autoIncrement: true,
            primaryKey: true,
            types: dataTypes.INTEGER,
        },
        foto_texto: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
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
        id_usuario: {
            type: dataTypes.INTEGER,
        }
    }


    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    }

    let Product = sequelize.define(alias, cols, config)
    return Product
}