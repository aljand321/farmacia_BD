'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('almacenamientos', {
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
      farmacia: {
        type: Sequelize.STRING
      },
      tipoTransaccion: {
        type: Sequelize.STRING
      },
      busqueda: {
        type: Sequelize.STRING
      },
      vigente: {
        type: Sequelize.BOOLEAN
      },
      tipoImpresora: {
        type: Sequelize.STRING
      },
      claseNotas: {
        type: Sequelize.STRING
      },
      listaAnulados: {
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
    return queryInterface.dropTable('almacenamientos');
  }
};