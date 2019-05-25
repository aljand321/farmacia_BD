'use strict';
module.exports = (sequelize, DataTypes) => {
  const asignacioAlmacen = sequelize.define('asignacioAlmacen', {
    codigo: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {});
  asignacioAlmacen.associate = function(models) {
    // associations can be defined here
  };
  return asignacioAlmacen;
};