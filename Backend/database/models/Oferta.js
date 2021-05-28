module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "Oferta",
    {
      id_oferta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idMoeda: {
        type: DataTypes.STRING(100),
      },
      fk_idUsuario: {
        type: DataTypes.STRING(100),
      },
      quantidade: {
        type: DataTypes.DECIMAL,
      },
      endereco: {
        type: DataTypes.STRING(200),
      },
      cotacao: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      tableName: "Ofertas",
      timestamps: false,
    }
  );

  Oferta.associate = (listaDeModelos) => {
    Oferta.hasOne(listaDeModelos.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });

    Oferta.hasmany(listaDeModelos.Moeda, {
      foreignKey: "id_oferta",
      as: "ofertas",
    });

    Oferta.hasmany(listaDeModelos.Ordem, {
      foreignKey: "id_ordem",
      as: "ofertas",
    });
  };

  return Oferta;
};
 