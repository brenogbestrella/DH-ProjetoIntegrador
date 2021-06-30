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
  createOferta: async (quantidade, endereco, cotacao) => {
    const newOferta = await database.Oferta.create({
      quantidade,
      endereco,
      cotacao,
    });
    return newOferta;
  },
  getOfertaList: async () => {
    const resultados = await database.Oferta.findAll({
      where: {
        data, //mudar a data pro createAt
      },
      limit: 10,
      offset: 5,
    });
    return resultados;
  },
  updateOferta: async (quantidade, endereco, cotacao) => {
    const updatedOferta = await database.Oferta.update(
      {
        quantidade,
        endereco,
        cotacao,
      },
      {
        where: {
          id,
        },
      }
    );

    return updatedOferta;
  },
  destroyOferta: async (id) => {
    const destroyedOferta = await database.Oferta.destroy({
      where: {
        id,
      },
    });
    return destroyedOferta;
  },
};

module.exports = OfertaService;
