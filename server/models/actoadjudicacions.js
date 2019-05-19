'use strict';
module.exports = (sequelize, DataTypes) => {
  const actoAdjudicacions = sequelize.define('actoAdjudicacions', {
    gestion: DataTypes.INTEGER,
    establecimiento: DataTypes.STRING,
    almacen: DataTypes.STRING,
    busqueda: DataTypes.STRING,
    vigente: DataTypes.BOOLEAN,
    programa: DataTypes.STRING,
    numSolicitud: DataTypes.INTEGER
  }, {});
  actoAdjudicacions.associate = function(models) {
    // associations can be defined here
  };
  return actoAdjudicacions;
};