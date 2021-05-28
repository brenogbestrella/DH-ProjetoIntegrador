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
        type: DataTypes.STRING(50),
      },
      sobrenome: {
        type: DataTypes.STRING(100),
      },
      endereço: {
        type: DataTypes.STRING(100),
      },
      documento: {
        //cpf ou cnpj dependem do tipo de usuario logo abaixo
        type: DataTypes.STRING(50),
      },
      tipo: {
        //tipo define se é pessoa fisica ou juridica
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
      foreignKey: "id_oferta",
      as: "oferta",
      //algo me diz q esses alias vao dar merda na hora da consulta no banco de dados
    });

    Usuario.hasMany(listaDeModelos.Ordem, {
      foreignKey: "fk_idOferta",
      as: "oferta",
    });
  };
  return Usuario;
};
