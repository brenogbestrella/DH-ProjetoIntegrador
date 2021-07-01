"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("oferta", {
      id_oferta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idMoeda: {
        type: Sequelize.INTEGER,
      },
      fk_idUsuario: {
        type: Sequelize.INTEGER,
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
      endereco: {
        type: Sequelize.STRING(200),
      },
      cotacao: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("oferta");
  },
};
