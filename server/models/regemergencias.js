'use strict';
module.exports = (sequelize, DataTypes) => {
  const regEmergencias = sequelize.define('regEmergencias', {
    establecimiento: DataTypes.STRING,
    farmacia: DataTypes.STRING,
    gestion: DataTypes.INTEGER,
    vigente: DataTypes.BOOLEAN,
    busqueda: DataTypes.STRING,
    numSolicitud: DataTypes.INTEGER
  }, {});
  regEmergencias.associate = function(models) {
    // associations can be defined here
  };
  return regEmergencias;
};