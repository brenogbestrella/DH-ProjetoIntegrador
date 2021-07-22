const database = require("../database/models/index");

const MoedaService = {
  getMoedaList: async () => {
    const resultados = await database.Moeda.findAll();
    
    return resultados;

  },
  createMoeda: async () => {
    const newMoeda = await database.Moeda.create({
      nome,
      simbolo,
    });
    return newMoeda;
  },

  updateMoeda: async (nome, simbolo) => {
    const updatedMoeda = await database.Moeda.update(
      {
        nome,
        simbolo,
      },
      {
        where: {
          id_moeda,
        },
      }
    );

    return updatedMoeda;
  },
  destroyMoeda: async (id_moeda) => {
    const destroyedMoeda = await database.Moeda.destroy({
      where: {
        id_moeda,
      },
    });
    return destroyedMoeda;
  },
};

module.exports = MoedaService;
