'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicamentosInsumos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grupoAsignacion: {
        type: Sequelize.STRING
      },
      codificacion: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      generico: {
        type: Sequelize.STRING
      },
      unidadMedida: {
        type: Sequelize.STRING
      },
      presentacion: {
        type: Sequelize.STRING
      },
      concentracion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicamentosInsumos');
  }
};