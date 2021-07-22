const MoedaService = require("../services/MoedaService");

const controller = {
  indexById: async (req, res) => {
    const { id_moeda } = req.query;

    const moeda = await MoedaService.getById(id_moeda);

    if (!moeda) {
      return res.status(404).json({ error: `Moeda ${id} não encontrada` });
    }

    return res.json(moeda);
  },
  indexAll: async (req, res) => {
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
    const { id_moeda } = req.params;
    const { nome, simbolo } = req.body;

    const updatedMoeda = await MoedaService.updateMoeda(
      id_moeda,
      nome,
      simbolo
    );

    return res.json(updatedMoeda);
  },
  destroy: async (req, res) => {
    const { id_moeda } = req.params;

    const destroyedMoeda = await MoedaService.destroyMoeda(id_moeda);

    return res.json(destroyedMoeda);
  },
};

module.exports = controller;
