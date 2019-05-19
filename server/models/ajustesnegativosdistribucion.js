'use strict';
module.exports = (sequelize, DataTypes) => {
  const ajustesNegativosDistribucion = sequelize.define('ajustesNegativosDistribucion', {
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
  ajustesNegativosDistribucion.associate = function(models) {
    // associations can be defined here
  };
  return ajustesNegativosDistribucion;
};