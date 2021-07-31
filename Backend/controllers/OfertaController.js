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
    const { endereco, data, moeda } = req.query; 
    const list = await OfertaService.getOfertaList(endereco, data, moeda);
    return res.json(list);
  },
  indexAllByUser: async (req, res) => {
    const { endereco, data, moeda } = req.query; 
    const list = await OfertaService.getOfertaListByUser(req.userId);
    return res.json(list);
  },
  create: async (req, res) => {
    const { fk_idMoeda, quantidade, data, endereco } = req.body; 
    const oferta = await OfertaService.createOferta(req.userId, fk_idMoeda, quantidade, data, endereco);

    return res.json(oferta);
  },
  update: async (req, res) => {
    const { id_oferta } = req.params;
    const { fk_idMoeda, quantidade, data, endereco } = req.body;

    const updatedOferta = await OfertaService.updateOferta(
      id_oferta,
      fk_idMoeda,
      quantidade,
      data,
      endereco
    );

    return res.json(updatedOferta);
  },
  destroy: async (req, res) => {
    const { id_oferta } = req.params;

    const destroyedOferta = await OfertaService.destroyOferta(id);

    return res.json(destroyedOferta);
  },
};

module.exports = controller;