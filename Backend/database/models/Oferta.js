module.exports = (sequelize, DataTypes) => {
  const Oferta = sequelize.define(
    "Oferta",
    {
      id_oferta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_idMoeda: {
        type: DataTypes.INTEGER,
      },
      fk_idUsuario: {
        type: DataTypes.INTEGER,
      },
      quantidade: {
        type: DataTypes.INTEGER,
      },
      endereco: {
        type: DataTypes.STRING(200),
      },
      cotacao: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "OFERTA",
      timestamps: false,
    }
  );

  Oferta.associate = (listaDeModelos) => {
    Oferta.belongsTo(listaDeModelos.Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
    });

    Oferta.belongsTo(listaDeModelos.Moeda, {
      foreignKey: "id_moeda",
      as: "moeda",
    });

    Oferta.hasMany(listaDeModelos.Ordem, {
      foreignKey: "id_oferta",
      as: "ordem",
    });
  };

  return Oferta;
};
