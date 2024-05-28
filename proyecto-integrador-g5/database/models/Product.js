module.exports = function (sequelize, dataTypes) {
    let alias = "Product"

    let cols = {
        id_producto: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        foto_texto: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
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

    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "id_producto"
        })

        Product.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "id_usuario"
        })
    }
    return Product
}