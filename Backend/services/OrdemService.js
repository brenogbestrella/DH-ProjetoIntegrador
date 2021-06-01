const database = require("../database/models/index");

const OrdemService = {
  listOrdemData: (ordemName) => {
    const ordemList = OrdemService.listOrdem();
    let ordem = ordemList.find((item) => item.name === ordemName);

    if (!ordem) {
      ordem = ordemList[0];
    }

    return ordem;
  },
  createOrdem: async (quantidade, data, endereco) => {
    const newOrdem = await database.Ordem.create({
      quantidade,
      data,
      endereco,
    });
    return newOrdem;
  },
  getOrdemList: async () => {
    const resultados = await database.Ordem.findAll({
      where: {
        data,
      },
      limit: 10,
      offset: 5,
    });
    return resultados;
  },
  updateOrdem: async (quantidade, data, endereco) => {
    const updatedOrdem = await database.Ordem.update(
      {
        quantidade,
        data,
        endereco,
      },
      {
        where: {
          id,
        },
      }
    );

    return updatedOrdem;
  },
  destroyOrdem: async (id) => {
    const destroyedOrdem = await database.Ordem.destroy({
      where: {
        id,
      },
    });
    return destroyedOrdem;
  },
};

module.exports = OrdemService;
