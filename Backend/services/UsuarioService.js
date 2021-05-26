const database = require("../database/models/Usuario");

const UsuarioService = {
  listUsuario: () => {
    const bento = new UsuarioModel(
      1,
      "Bento",
      "José",
      "Rua AXC",
      "123.446.789-01"
    );
    const energumeno = new UsuarioModel(
      2,
      "Energúmeno",
      "Zózimo",
      "Rua ABD",
      "123.436.789-02"
    );
    return [bento, energumeno];
  },
  listUsuarioData: (usuarioName) => {
    const usuarioList = UsuarioService.listUsuario();
    let usuario = pusuarioList.find((item) => item.name === usuarioName);

    if (!usuario) {
      usuario = usuarioList[0];
    }

    return usuario;
  },
  createUsuario: async (nome, sobrenome, endereco, documento) => {
    const newUsuario = await database.Usuario.create({
      nome,
      sobrenome,
      endereco,
      documento,
    });
    return newUsuario;
  },
  getUsuarioList: async () => {
    const resultados = await database.Usuario.findAll({
      where: {
        nome,
      },
      limit: 10,
      offset: 5,
    });
    return resultados;
  },
  updateUsuario: async (nome, sobrenome, endereco, documento) => {
    const updatedUsuario = await database.Usuario.update(
      {
        nome,
        sobrenome,
        endereco,
        documento,
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
};

module.exports = UsuarioService;
