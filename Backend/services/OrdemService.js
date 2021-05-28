const database = require("../database/models/Ordem");

const OrdemService = {
  listOrdem: () => {
    const bento = new OrdemModel(
      1,
      "Bento",
      "José",
      "Rua AXC",
      "123.446.789-01"
    );
    const energumeno = new OrdemModel(
      2,
      "Energúmeno",
      "Zózimo",
      "Rua ABD",
      "123.436.789-02"
    );
    return [bento, energumeno];
  },
  listOrdemData: (OrdemName) => {
    const OrdemList = OrdemService.listOrdem();
    let Ordem = OrdemList.find((item) => item.name === OrdemName);

    if (!Ordem) {
      Ordem = OrdemList[0];
    }

    return Ordem;
  },
  createOrdem: async (quantidade, data, local) => {
    const newOrdem = await database.Ordem.create({
      quantidade,
      data,
      local,
    });
    return newOrdem;
  },
  getOrdemList: async () => {
    const resultados = await database.Ordem.findAll({
      where: {
        nome,
      },
      limit: 10,
      offset: 5,
    });
    return resultados;
  },
  updateOrdem: async (quantidade, data, local) => {
    const updatedOrdem = await database.Ordem.update(
      {
        quantidade,
        data,
        local,
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
