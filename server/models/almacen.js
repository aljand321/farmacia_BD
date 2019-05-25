'use strict';
module.exports = (sequelize, DataTypes) => {
  const almacen = sequelize.define('almacen', {
    nombre: DataTypes.STRING,
    establecimiento: DataTypes.STRING,
    distribucionPaciente: DataTypes.STRING,
    lapsoR: DataTypes.STRING,
    nivleMinimo: DataTypes.STRING,
    nivelReserva: DataTypes.STRING,
    nivelMaximo: DataTypes.STRING,
    periodoR: DataTypes.STRING,
    metodoCosteo: DataTypes.STRING
  }, {});
  almacen.associate = function(models) {
    // associations can be defined here
  };
  return almacen;
};