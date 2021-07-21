const MoedaService = require("../services/MoedaService");
const { validationResult } = require("express-validator");

const controller = {
  index: (req, res) => {
    const { nome } = req.query;

    const moeda = MoedaService.listMoedaData(nome);

    return res.json(moeda);
  },
  indexAll: async (req, res) => { //levar pro front com axios
    const list = await MoedaService.getMoedaList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { nome, simbolo } = req.body;

    const moeda = await MoedaService.createMoeda(
      nome,
      simbolo
    );

    return res.json(moeda);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, simbolo } = req.body;

    const updatedMoeda = await MoedaService.updateMoeda(
      id,
      nome,
      simbolo
    );

    return res.json(updatedMoeda);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const destroyedMoeda = await MoedaService.destroyMoeda(id);

    return res.json(destroyedMoeda);
  },
};

module.exports = controller;
