'use strict';
module.exports = (sequelize, DataTypes) => {
  const servicio = sequelize.define('servicio', {
    grupoAsignacion: DataTypes.STRING,
    codificacion: DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  servicio.associate = function(models) {
    // associations can be defined here
  };
  return servicio;
};