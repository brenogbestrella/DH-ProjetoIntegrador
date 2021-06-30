module.exports = (sequelize, DataTypes) => {
  const Ordem = sequelize.define(
    "Ordem",
    {
      id_ordem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idOferta: {
        type: DataTypes.INTEGER,
      },
      quantidade: {
        type: DataTypes.INTEGER,
      },
      data: {
        type: DataTypes.DATE,
      },
      endereco: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Ordem",
      timestamps: false,
    }
  );

  Ordem.associate = (listaDeModelos) => {
    Ordem.belongsTo(listaDeModelos.Oferta, {
      foreignKey: "id_oferta",
      as: "oferta",
    });

    // Ordem.belongsTo(listaDeModelos.Usuario, {
    //   foreignKey: "id_usuario",
    //   as: "usuario",
    // });
  };

  //inserir id_usuario

  return Ordem;
}
};
