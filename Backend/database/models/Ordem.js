module.exports = (sequelize, DataTypes) => {
  sequelize.define(
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
    },
    {
      tableName: "Ordem",
      timestamps: false,
    }
  );

  Ordem.associate = (listaDeModelos) => {
    Ordem.belongsToMany(listaDeModelos.Oferta, {
      foreignKey: "id_oferta",
      as: "oferta",
    });
  

  Ordem.belongsToMany(listaDeModelos.Usuario, {
    foreignKey: "id_usuario",
    as: "usuario",
  });

  return Ordem;
};
