'use strict';
module.exports = (sequelize, DataTypes) => {
  const ajustesNegativos = sequelize.define('ajustesNegativos', {
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
  ajustesNegativos.associate = function(models) {
    // associations can be defined here
  };
  return ajustesNegativos;
};