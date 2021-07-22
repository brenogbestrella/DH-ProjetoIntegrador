"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Moeda", [
      {
        nome: "Real",
        simbolo: "R$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Dólar",
        simbolo: "$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Euro",
        simbolo: "€",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Libra",
        simbolo: "£",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Iene",
        simbolo: "¥",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Moeda", null, {});
  },
};
