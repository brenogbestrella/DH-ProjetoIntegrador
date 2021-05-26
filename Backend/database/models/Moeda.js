module.exports = (sequelize, DataTypes) => {
  sequelize.define(
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
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "MOEDA",
      timestamps: false,
    }
  );

  Moeda.associate = (listaDeModelos) => {
    Moeda.belongsToMany(listaDeModelos.Oferta, {
      foreignKey: "id_oferta",
      as: "oferta",
    });
  };

  return Moeda;
};
