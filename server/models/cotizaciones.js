'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cotizaciones = sequelize.define('Cotizaciones', {
    establecimiento: DataTypes.STRING,
    farmacia: DataTypes.STRING,
    gestion: DataTypes.STRING,
    busqueda: DataTypes.STRING,
    reporteTramite: DataTypes.STRING,
    farmacia: DataTypes.BOOLEAN,
    vigente: DataTypes.BOOLEAN,
    numSolicitud: DataTypes.INTEGER
  }, {});
  Cotizaciones.associate = function(models) {
    // associations can be defined here
  };
  return Cotizaciones;
};