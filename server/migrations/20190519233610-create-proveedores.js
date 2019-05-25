'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('proveedores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreProveedores: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      responsableAtencion: {
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
    return queryInterface.dropTable('proveedores');
  }
};