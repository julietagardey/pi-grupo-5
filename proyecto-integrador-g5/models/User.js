module.exports = function (sequelize, dataTypes) {
    let alias = "User"

    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            types: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.STRING,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        foto_texto: {
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
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let User = sequelize.define(alias, cols, config)
    return User
}