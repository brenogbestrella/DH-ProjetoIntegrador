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
        type: DataTypes.DECIMAL,
      },
      endereco: {
        type: DataTypes.STRING(200),
      },
      data: {
        type: DataTypes.DATEONLY,
      }
    },
    {
      tableName: "Oferta",
      timestamps: true,
    }
  );

  Oferta.associate = (listaDeModelos) => {
    Oferta.belongsTo(listaDeModelos.Usuario, {
      foreignKey: "fk_idUsuario",
      as: "usuario",
    });


    Oferta.belongsTo(listaDeModelos.Moeda, {
      foreignKey: "fk_idMoeda",
      as: "moeda",
    });

    Oferta.hasMany(listaDeModelos.Ordem, {
      foreignKey: "id_oferta",
      as: "ordem",

    });
  };

  return Oferta;
};
 