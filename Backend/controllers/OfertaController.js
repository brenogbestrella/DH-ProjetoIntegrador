const OfertaService = require("../services/OfertaService");
const { validationResult } = require("express-validator");

const controller = {
  index: (req, res) => {
    const { nome } = req.query;

    const oferta = OfertaService.listOfertaData(nome);

    return res.json(oferta);
  },
  indexAll: async (req, res) => {
    const list = await OfertaService.getOfertaList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { quantidade, endereco, cotacao } = req.body;

    // const idUsuario = req.userId;

    const oferta = await OfertaService.createOferta(
      quantidade,
      endereco,
      cotacao
    );

    return res.json(oferta);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { quantidade, endereco, cotacao } = req.body;

    const updatedOferta = await OfertaService.updateOferta(
      id,
      quantidade,
      endereco,
      cotacao
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
