const database = require("../database/models/index");

const UsuarioService = {
  createUsuario: async (nome, email, senha, documento, telefone, tipo) => {
    const newUsuario = await database.Usuario.create({
      nome,
      email,
      senha,
      documento,
      telefone,
      tipo,
    });
    return newUsuario;
  },
  getUsuarioList: async () => {
    const resultados = await database.Usuario.findAll();
    return resultados;
  },
  getUsuarioPessoaFisica: async () => {
    const usuarioPessoaFisica = await database.Usuario.findAll({
      where: {
        tipo: 0,
      },
    });
    return usuarioPessoaFisica;
  },
  getUsuarioPessoaJuridica: async () => {
    const usuarioPessoaJuridica = await database.Usuario.findAll({
      where: {
        tipo: 1,
      },
    });
    return usuarioPessoaJuridica;
  },
  updateUsuario: async (id, nome, email, senha, documento, telefone, tipo) => {
    const updatedUsuario = await database.Usuario.update(
      {
        nome,
        email,
        senha,
        documento,
        telefone,
        tipo,
      },
      {
        where: {
          id,
        },
      }
    );

    return updatedUsuario;
  },
  destroyUsuario: async (id) => {
    const destroyedUsuario = await database.Usuario.destroy({
      where: {
        id,
      },
    });
    return destroyedUsuario;
  },
  getById: async (id) => {
    return await database.Usuario.findByPk(id);
  },
  getAttributeById: async (id, attribute) => {
    return await database.Usuario.findByPk(id, {
      attributes: [attribute],
    });
  },
};

module.exports = UsuarioService;
//check
