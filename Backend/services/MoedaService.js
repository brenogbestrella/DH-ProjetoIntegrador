const database = require("../database/models/Moeda");

const MoedaService = {
  listMoedaData: (MoedaName) => {
    const MoedaList = MoedaService.listMoeda();
    let Moeda = MoedaList.find((item) => item.nome === MoedaNome);

    if (!Moeda) {
        Moeda = MoedaList[0];
    }

    return Moeda;
  },
  createMoeda: async (nome, simbolo) => {
    const newMoeda = await database.Moeda.create({
      nome,
      simbolo
    });
    return newMoeda;
  },

  updateMoeda: async (nome, moeda) => {
    const updatedMoeda = await database.Moeda.update(
      {
        nome,
        simbolo
      },
      {
        where: {
          id,
        },
      }
    );

    return updatedMoeda;
  },
  destroyMoeda: async (id) => {
    const destroyedMoeda = await database.Moeda.destroy({
      where: {
        id,
      },
    });
    return destroyedMoeda;
  },
};

module.exports = MoedaService;
