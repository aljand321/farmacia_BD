'use strict';
module.exports = (sequelize, DataTypes) => {
  const proveedores = sequelize.define('proveedores', {
    nombreProveedores: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    responsableAtencion: DataTypes.STRING
  }, {});
  proveedores.associate = function(models) {
    // associations can be defined here
  };
  return proveedores;
};