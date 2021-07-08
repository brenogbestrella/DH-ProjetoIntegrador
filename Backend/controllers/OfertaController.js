const OfertaService = require("../services/OfertaService");
const { validationResult } = require("express-validator");

const controller = {
  indexById: async (req, res) => {
    const { id } = req.params;
    const oferta = await OfertaService.getById(id);

    if (!oferta) {
      return res.status(404).json({ error: `Oferta ${id} não encontrado` });
    }

    return res.json(oferta);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;
    const oferta = await OfertaService.getAttributeById(id, attribute);

    if (!oferta) {
      return res.status(404).json({ error: `Oferta ${id} não encontrado` });
    }

    return res.json(oferta);
  },
  //index: (req, res) => {
    //const { nome } = req.query;

    //const oferta = OfertaService.listOfertaData(nome);

    //return res.json(oferta);
  //},
  indexAll: async (req, res) => {
    const list = await OfertaService.getOfertaList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { quantidade, data, endereco } = req.body; //INSERIR MOEDA

    const idUsuario = req.userId;

    const oferta = await OfertaService.createOferta(quantidade, data, endereco);

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
