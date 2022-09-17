const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../DB_config/mysql");

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameRole: {
      type: DataTypes.STRING,
    },
    descritionRole: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "role",
    timestamps: false,
  }
);

module.exports = Role;
