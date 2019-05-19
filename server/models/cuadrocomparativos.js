'use strict';
module.exports = (sequelize, DataTypes) => {
  const CuadroComparativos = sequelize.define('CuadroComparativos', {
    establecimiento: DataTypes.STRING,
    farmacia: DataTypes.STRING,
    busqueda: DataTypes.STRING,
    gestion: DataTypes.INTEGER,
    vigente: DataTypes.BOOLEAN,
    numSolicitud: DataTypes.INTEGER
  }, {});
  CuadroComparativos.associate = function(models) {
    // associations can be defined here
  };
  return CuadroComparativos;
};