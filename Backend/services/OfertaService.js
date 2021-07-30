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
  getOfertaList: async () => {
    const resultados = await database.Oferta.findAll({
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
          ]
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
  destroyOferta: async (id) => {
    const destroyedOferta = await database.Oferta.destroy({
      where: {
        id_oferta,
      },
    });
    return destroyedOferta;
  },
};

module.exports = OfertaService;
