'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('actoAdjudicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gestion: {
        type: Sequelize.INTEGER
      },
      establecimiento: {
        type: Sequelize.STRING
      },
      almacen: {
        type: Sequelize.STRING
      },
      busqueda: {
        type: Sequelize.STRING
      },
      vigente: {
        type: Sequelize.BOOLEAN
      },
      programa: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('actoAdjudicacions');
  }
};