const UsuarioService = require("../services/UsuarioService");
const bcrypt = require("bcryptjs");

const controller = {
  indexById: async (req, res) => {
    const { id } = req.params;
    const usuario = await UsuarioService.getById(id);

    if (!usuario) {
      return res.status(404).json({ error: `Usuário ${id} não encontrado` });
    }

    return res.json(usuario);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;
    const usuario = await UsuarioService.getAttributeById(id, attribute);

    if (!usuario) {
      return res.status(404).json({ error: `Usuário ${id} não encontrado` });
    }

    return res.json(usuario);
  },
  indexAll: async (req, res) => {
    const list = await UsuarioService.getUsuarioList();
    return res.json(list);
  },

  indexPessoaFisica: async (req, res) => {
    const pessoaFisica = await UsuarioService.getUsuarioPessoaFisica();
    return res.json(pessoaFisica);
  },

  indexPessoaJuridica: async (req, res) => {
    const pessoaJuridica = await UsuarioService.getUsuarioPessoaJuridica();
    return res.json(pessoaJuridica);
  },

  create: async (req, res) => {
    const { nome, email, senha, documento, telefone, tipo } = req.body;
    const usuario = await UsuarioService.createUsuario(
      nome,
      email,
      senha,
      documento,
      telefone,
      tipo
    );

    return res.json({nome: usuario.nome, email: usuario.email, documento: usuario.email, telefone: usuario.telefone, tipo: usuario.tipo});
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, documento, telefone, tipo } = req.body;

    const updatedUsuario = await UsuarioService.updateUsuario(
      id,
      nome,
      email,
      senha,
      documento,
      telefone,
      tipo
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
//check
