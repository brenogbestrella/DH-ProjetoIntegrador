"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Moeda", [
      {
        nome: "Real",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Dólar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Euro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Libra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Iene",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Moeda", null, {});
  },
};
