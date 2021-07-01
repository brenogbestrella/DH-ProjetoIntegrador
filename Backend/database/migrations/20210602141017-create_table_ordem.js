"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ordem", {
      id_ordem: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idOferta: {
        type: Sequelize.INTEGER,
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
      data: {
        type: Sequelize.DATE,
      },
      endereco: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("ordem");
  },
};
