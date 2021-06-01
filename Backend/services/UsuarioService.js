const database = require("../database/models/index");

const UsuarioService = {
  listUsuarioData: (usuarioNome) => {
    const usuarioList = UsuarioService.listUsuario();
    let usuario = usuarioList.find((item) => item.nome === usuarioNome);

    if (!usuario) {
      usuario = usuarioList[0];
    }

    return usuario;
  },
  createUsuario: async (nome, email, senha, documento, tipo) => {
    const newUsuario = await database.usuario.create({
      nome,
      email,
      senha,
      documento,
      tipo,
    });
    return newUsuario;
  },
  getUsuarioList: async () => {
    const resultados = await database.usuario.findAll();
    return resultados;
  },
  getUsuarioPessoaFisica: async () => {
    const usuarioPessoaFisica = await database.usuario.findAll({
      where: {
        tipo: 1,
      },
      include: [
        {
          model: Usuario,
        },
      ],
    });
    return usuarioPessoaFisica;
  },
  updateUsuario: async (nome, email, senha, documento, tipo) => {
    const updatedUsuario = await database.usuario.update(
      {
        nome,
        email,
        senha,
        documento,
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
    const destroyedUsuario = await database.usuario.destroy({
      where: {
        id,
      },
    });
    return destroyedUsuario;
  },
};

module.exports = UsuarioService;
//check
