const CadastroService = require("../services/CadastroService");
const bcrypt = require("bcryptjs");



const controller = {
    cadastro: async (req, res) => {
      const { nome, email, senha, documento, tipo } = req.body;
      const hash = await bcrypt.hash(senha, 10);
      const usuario = await CadastroService.createCadastro(
        nome,
        email,
        senha,
        hash,
        documento,
        tipo
      );

      return res.json({nome: usuario.nome, email: usuario.email, documento: usuario.email, tipo: usuario.tipo});
    },
};

module.exports = controller;