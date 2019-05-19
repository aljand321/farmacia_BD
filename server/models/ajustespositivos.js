'use strict';
module.exports = (sequelize, DataTypes) => {
  const ajustesPositivos = sequelize.define('ajustesPositivos', {
    gestion: DataTypes.INTEGER,
    establecimiento: DataTypes.STRING,
    farmacia: DataTypes.STRING,
    tipoTransaccion: DataTypes.STRING,
    busqueda: DataTypes.STRING,
    vigente: DataTypes.BOOLEAN,
    tipoImpresora: DataTypes.STRING,
    claseNotas: DataTypes.STRING,
    listaAnulados: DataTypes.STRING
  }, {});
  ajustesPositivos.associate = function(models) {
    // associations can be defined here
  };
  return ajustesPositivos;
};