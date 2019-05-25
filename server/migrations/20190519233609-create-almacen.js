'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('almacens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      establecimiento: {
        type: Sequelize.STRING
      },
      distribucionPaciente: {
        type: Sequelize.STRING
      },
      lapsoR: {
        type: Sequelize.STRING
      },
      nivleMinimo: {
        type: Sequelize.STRING
      },
      nivelReserva: {
        type: Sequelize.STRING
      },
      nivelMaximo: {
        type: Sequelize.STRING
      },
      periodoR: {
        type: Sequelize.STRING
      },
      metodoCosteo: {
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
    return queryInterface.dropTable('almacens');
  }
};