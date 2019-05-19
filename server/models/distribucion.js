'use strict';
module.exports = (sequelize, DataTypes) => {
  const distribucion = sequelize.define('distribucion', {
    gestion: DataTypes.INTEGER,
    establecimiento: DataTypes.STRING,
    farmacia: DataTypes.STRING,
    tipoTransaccion: DataTypes.STRING,
    busqueda: DataTypes.STRING,
    vigente: DataTypes.STRING,
    tipoImpresora: DataTypes.STRING,
    claseNotas: DataTypes.STRING,
    listaAnulados: DataTypes.STRING
  }, {});
  distribucion.associate = function(models) {
    // associations can be defined here
  };
  return distribucion;
};