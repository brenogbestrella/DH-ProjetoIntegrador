module.exports = (sequelize, DataTypes) => {
  const Ordem = sequelize.define(
    "Ordem",
    {
      id_ordem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idUsuario: {
        type: DataTypes.INTEGER,
      },
      fk_idOferta: {
        type: DataTypes.INTEGER,
      },
      quantidade: {
        type: DataTypes.DECIMAL,
      },
      data: {
        type: DataTypes.DATEONLY,
      },
      endereco: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Ordem",
      timestamps: true,
    }
  );

  Ordem.associate = (listaDeModelos) => {
    Ordem.belongsTo(listaDeModelos.Oferta, {
      foreignKey: "fk_idOferta",
      as: "oferta",
    });

    Ordem.belongsTo(listaDeModelos.Usuario, {
      foreignKey: "fk_idUsuario",
      as: "usuario",
    });
  };

  //inserir id_usuario

  return Ordem;
};
