const OrdemService = require("../services/OrdemService");
const { validationResult } = require("express-validator");

const controller = {
  index: (req, res) => {
    const { nome } = req.query;

    const ordem = OrdemService.listOrdemData(nome);

    return res.json(ordem);
  },
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
