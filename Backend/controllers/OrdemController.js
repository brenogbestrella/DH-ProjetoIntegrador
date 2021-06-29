const OrdemService = require("../services/OrdemService");
const { validationResult } = require("express-validator");

const controller = {

  indexById: async (req, res) => {
    const { id } = req.params;
    const ordem = await OrdemService.getById(id);

    if (!ordem) {
      return res.status(404).json({ error: `Ordem ${id} não encontrado` });
    }

    return res.json(ordem);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;
    const ordem = await OrdemService.getAttributeById(id, attribute);

    if (!ordem) {
      return res.status(404).json({ error: `Usuário ${id} não encontrado` });
    }

    return res.json(ordem);
  },

  //index: (req, res) => {
    //const { nome } = req.query;

   // const ordem = OrdemService.listOrdemData(nome);

   // return res.json(ordem);
  //},
  indexAll: async (req, res) => {
    const list = await OrdemService.getOrdemList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { quantidade, data, endereco } = req.body;

    const ordem = await OrdemService.createOrdem(quantidade, data, endereco);

    return res.json(ordem);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { quantidade, data, endereco } = req.body;

    const updatedOrdem = await OrdemService.updateOrdem(
      id,
      quantidade,
      data,
      endereco
    );

    return res.json(updatedOrdem);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const destroyedOrdem = await OrdemService.destroyOrdem(id);

    return res.json(destroyedOrdem);
  },
};

module.exports = controller;
