module.exports = (sequelize, dataTypes) => {
    let alias = "productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: true
        },
        foto: {
            type: dataTypes.STRING,
            allowNull: true
        },
        precio_unitario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        create_at: {
            type: dataTypes.timestamps,
            allowNull: false
        },
        update_at: {
            type: dataTypes.timestamps,
            allowNull: true
        }
    }
    let config = {
        tableName: "productos",
        underscored: true,
        timestamps: true
    }


const productos = sequelize.define(alias,cols,config);
/* relacion con carrito
productos.associate = function(models){
    productos.belongsTo(models.carrito,{
        as: "",
        foreignKey: ""
    });
}
*/
return productos;

}