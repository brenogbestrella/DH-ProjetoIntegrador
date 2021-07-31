const database = require("../database/models/index");

const OfertaService = {
  listOfertaData: (ofertaName) => {
    const ofertaList = OfertaService.listOferta();
    let oferta = ofertaList.find((item) => item.name === ofertaName);

    if (!oferta) {
      oferta = ofertaList[0];
    }

    return oferta;
  },
  createOferta: async (fk_idUsuario, fk_idMoeda, quantidade, data, endereco) => {
    const newOferta = await database.Oferta.create({
      fk_idUsuario,
      fk_idMoeda,
      quantidade,
      data,
      endereco,
    });
    return newOferta;
  },
  getOfertaList: async (endereco, data, moeda) => {
    const resultados = await database.Oferta.findAll({
      where: {
        data: data || new Date(),
        fk_idMoeda: moeda || 0,
        endereco: {
          [database.Sequelize.Op.like]: `%${endereco}%`
        },
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
          model: database.Moeda,
          as: "moeda",
          attributes: [
            "nome",
            "simbolo"
          ],
        }
      ]
    });
    return resultados;
  },
  getOfertaListByUser: async (userId) => {
    const resultados = await database.Oferta.findAll({
      where: {
        fk_idUsuario: userId
      },
      include: [
        {
          model: database.Moeda,
          as: "moeda",
          attributes: [
            "nome",
            "simbolo"
          ],
        }
      ]
    });
    return resultados;
  },
  updateOferta: async (fk_idMoeda, quantidade, data, endereco) => {
    const updatedOferta = await database.Oferta.update(
      {
        fk_idMoeda,
        quantidade,
        data,
        endereco,
      },
      {
        where: {
          id_oferta,
        },
      }
    );

    return updatedOferta;
  },
  destroyOferta: async (id_oferta) => {
    const destroyedOferta = await database.Oferta.destroy({
      where: {
        id_oferta,
      },
    });
    return destroyedOferta;
  },
};

module.exports = OfertaService;
