'use strict';
module.exports = (sequelize, DataTypes) => {
  const articulos = sequelize.define('articulos', {
    grupoAsignacion: DataTypes.STRING,
    codificacion: DataTypes.STRING,
    nombre: DataTypes.STRING,
    unidadMedida: DataTypes.STRING
  }, {});
  articulos.associate = function(models) {
    // associations can be defined here
  };
  return articulos;
};