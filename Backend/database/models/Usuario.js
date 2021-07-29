const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING(50),
      },
      senha: {
        type: DataTypes.VIRTUAL,
      },
      senha_hash: {
        type: DataTypes.STRING,
      },
      documento: {
        type: DataTypes.STRING(50),
      },
      telefone: {
        type: DataTypes.STRING(15),
      },
      tipo: {
        //tipo define se é pessoa fisica ou juridica / 0 = física; 1 = jurídica
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "usuario",
      timestamps: true,
    }
  );

  Usuario.addHook("beforeSave", async (usuario) => {
    if (usuario.senha) {
      usuario.senha_hash = await bcrypt.hash(usuario.senha, 12);
    }
  });

  Usuario.associate = (listaDeModelos) => {
    Usuario.hasMany(listaDeModelos.Oferta, {
      foreignKey: "fk_idUsuario",
      as: "oferta",
    });
    Usuario.hasMany(listaDeModelos.Ordem, {
      foreignKey: "id_oferta",
      as: "ordem",
    });
  };
  return Usuario;
};
