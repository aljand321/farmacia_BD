'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicamentosInsumos = sequelize.define('MedicamentosInsumos', {
    grupoAsignacion: DataTypes.STRING,
    codificacion: DataTypes.STRING,
    nombre: DataTypes.STRING,
    generico: DataTypes.STRING,
    unidadMedida: DataTypes.STRING,
    presentacion: DataTypes.STRING,
    concentracion: DataTypes.STRING
  }, {});
  MedicamentosInsumos.associate = function(models) {
    // associations can be defined here
  };
  return MedicamentosInsumos;
};