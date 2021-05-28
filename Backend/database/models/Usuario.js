module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "Usuario",
    {
      id_usuario: {
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
        type: DataTypes.STRING(8),
      },
      documento: {
        //cpf ou cnpj dependem do tipo de usuario logo abaixo (bem lembrado)
        type: DataTypes.STRING(50),
      },
      tipo: {
        //tipo define se é pessoa fisica ou juridica - 0 = física; 1 = jurídica
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "CADASTRO",
      timestamps: false,
    }
  );

  Usuario.associate = (listaDeModelos) => {
    Usuario.hasMany(listaDeModelos.Oferta, {
      foreignKey: "id_usuario",
      as: "oferta",
    });
    Usuario.hasMany(listaDeModelos.Ordem, {
      foreignKey: "id_oferta",
      as: "ordem_de_compra",
    });

    return Usuario;
  };
};
