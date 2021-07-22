const OfertaService = require("../services/OfertaService");

const controller = {
  indexById: async (req, res) => {
    const { id_oferta } = req.params;
    const oferta = await OfertaService.getById(id_oferta);

    if (!oferta) {
      return res.status(404).json({ error: `Oferta ${id_oferta} não encontrada` });
    }

    return res.json(oferta);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id_oferta, attribute } = req.params;
    const oferta = await OfertaService.getAttributeById(id_oferta, attribute);

    if (!oferta) {
      return res.status(404).json({ error: `Oferta ${id_oferta} não encontrada` });
    }

    return res.json(oferta);
  },
  indexAll: async (req, res) => {
    const list = await OfertaService.getOfertaList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { fk_idMoeda, quantidade, data, endereco } = req.body; 
    console.log(req.body)
    const oferta = await OfertaService.createOferta(req.userId, fk_idMoeda, quantidade, data, endereco);

    return res.json(oferta);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { quantidade, data, endereco } = req.body;

    const updatedOferta = await OfertaService.updateOferta(
      id,
      quantidade,
      data,
      endereco
    );

    return res.json(updatedOferta);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const destroyedOferta = await OfertaService.destroyOferta(id);

    return res.json(destroyedOferta);
  },
};

module.exports = controller;
