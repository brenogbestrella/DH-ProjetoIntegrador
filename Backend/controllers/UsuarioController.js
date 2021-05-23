const UsuarioService = require("../myApp/services/UsuarioService");
const { validationResult } = require("express-validator");

const controller = {
  index: (req, res) => {
    const { nome } = req.query;

    const usuario = UsuarioService.listUsuarioData(nome);

    return res.json(usuario);
  },
  indexAll: async (req, res) => {
    const list = await UsuarioService.getUsuarioList();
    return res.json(list);
  },
  create: async (req, res) => {
    const { nome, sobrenome, endereco, documento } = req.body;

    const usuario = await UsuarioService.createUsuario(
      nome,
      sobrenome,
      endereco,
      documento
    );

    return res.json(usuario);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, endereco, documento } = req.body;

    const updatedUsuario = await UsuarioService.updateUsuario(
      id,
      nome,
      sobrenome,
      endereco,
      documento
    );

    return res.json(updatedUsuario);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const destroyedUsuario = await UsuarioService.destroyUsuario(id);

    return res.json(destroyedUsuario);
  },
};

module.exports = controller;
