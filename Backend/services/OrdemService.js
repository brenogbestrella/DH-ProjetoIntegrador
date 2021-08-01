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
  createOrdem: async (fk_idUsuario, fk_idOferta, quantidade, data, endereco) => {
    const newOrdem = await database.Ordem.create({
      fk_idUsuario,
      fk_idOferta,
      quantidade,
      data,
      endereco,
    });
    return newOrdem;
  },
  getOrdemList: async (userId) => {
    const resultados = await database.Ordem.findAll({
      where: {
        fk_idUsuario: userId
      },
      include: [
        {
          model: database.Usuario,
          as: "usuario",
          attributes: [
            "nome",
            "telefone"
          ]
        },
        {
          model: database.Oferta,
          as: "oferta",
          include: [
            {
              model: database.Moeda,
              as: "moeda",
            },
            {
              model: database.Usuario,
              as: "usuario",
            }
          ]
        }
      ]
    });;
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
          id_ordem,
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

  getById: async (id) => {
    return await database.Ordem.findByPk(id);
  },
  getAttributeById: async (id, attribute) => {
    return await database.Ordem.findByPk(id, {
      attributes: [attribute],
    });
  },
};


module.exports = OrdemService;
