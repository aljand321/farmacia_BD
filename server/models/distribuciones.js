'use strict';
module.exports = (sequelize, DataTypes) => {
  const distribuciones = sequelize.define('distribuciones', {
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
  distribuciones.associate = function(models) {
    // associations can be defined here
  };
  return distribuciones;
};