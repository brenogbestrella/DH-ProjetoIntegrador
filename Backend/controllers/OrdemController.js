const OrdemService = require("../services/OrdemService");

const controller = {

  indexById: async (req, res) => {
    const { id_ordem } = req.params;
    const ordem = await OrdemService.getById(id_ordem);

    if (!ordem) {
      return res.status(404).json({ error: `Ordem ${id_ordem} não encontrado` });
    }

    return res.json(ordem);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id_ordem, attribute } = req.params;
    const ordem = await OrdemService.getAttributeById(id_ordem, attribute);

    if (!ordem) {
      return res.status(404).json({ error: `Usuário ${id_ordem} não encontrado` });
    }

    return res.json(ordem);
  },

  indexAll: async (req, res) => {
    const list = await OrdemService.getOrdemList(req.userId);
    return res.json(list);
  },
  create: async (req, res) => {
    const { fk_idOferta, quantidade, data, endereco } = req.body;

    const ordem = await OrdemService.createOrdem(req.userId, fk_idOferta, quantidade, data, endereco);

    return res.json(ordem);
  },
  update: async (req, res) => {
    const { id_ordem } = req.params;
    const { quantidade, data, endereco } = req.body;

    const updatedOrdem = await OrdemService.updateOrdem(
      id_ordem,
      quantidade,
      data,
      endereco
    );

    return res.json(updatedOrdem);
  },
  destroy: async (req, res) => {
    const { id_ordem } = req.params;

    const destroyedOrdem = await OrdemService.destroyOrdem(id_ordem);

    return res.json(destroyedOrdem);
  },
};

module.exports = controller;
