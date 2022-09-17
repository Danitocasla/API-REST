const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../DB_config/mysql");

class Roles extends Model {}

Roles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "roles",
    timestamps: false,
  }
);
module.exports = Roles;
