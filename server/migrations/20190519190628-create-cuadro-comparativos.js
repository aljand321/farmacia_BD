'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CuadroComparativos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      establecimiento: {
        type: Sequelize.STRING
      },
      farmacia: {
        type: Sequelize.STRING
      },
      busqueda: {
        type: Sequelize.STRING
      },
      gestion: {
        type: Sequelize.INTEGER
      },
      vigente: {
        type: Sequelize.BOOLEAN
      },
      numSolicitud: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('CuadroComparativos');
  }
};