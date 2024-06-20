module.exports = function (sequelize, dataTypes) {
    let alias = "User"

    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        foto_texto: {
            type: dataTypes.STRING,
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
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "productos",
            foreignKey: "id_usuario"
        })

        User.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "id_usuario"
        })
    }

    return User
}