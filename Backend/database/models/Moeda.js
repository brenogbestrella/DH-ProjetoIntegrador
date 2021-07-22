module.exports = (sequelize, DataTypes) => {
  const Moeda = sequelize.define(
    "Moeda",
    {
      id_moeda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(15),
      },
      simbolo: {
        type: DataTypes.STRING(5),
      },
    },
    {
      tableName: "MOEDA",
      timestamps: true,
    }
  );

  Moeda.associate = (listaDeModelos) => {
    Moeda.hasMany(listaDeModelos.Oferta, {
      foreignKey: "id_oferta",
      as: "oferta",
    });
  };

  return Moeda;
};
