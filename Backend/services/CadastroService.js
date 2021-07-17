const database = require("../database/models/index");

const CadastroService = {
    createCadastro: async (nome, email, senha, documento, tipo) => {
      const newCadastro = await database.Usuario.create({
        nome,
        email,
        senha,
        documento,
        tipo,
      });
      return newCadastro;
    },
}

module.exports = CadastroService;