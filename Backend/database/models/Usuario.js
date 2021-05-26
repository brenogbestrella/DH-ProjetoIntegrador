module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "Usuario",
    {
      id: {
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
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: "CADASTRO",
      timestamps: false,
    }
  );
