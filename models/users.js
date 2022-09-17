const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../DB_config/mysql");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    cuil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM("Enable", "Disable"),
      defaultValue: "Enable",
    },
  },
  {
    sequelize,
    modelName: "users",
  }
);
module.exports = Users;
/*
  {
    User.hasOne(role, {
    foreignKey: "roleId",
    sourceKey: "id",
  });
  role.belongsTo(User, {
    foreignKey: "roleId",
    targetId: "id",}
  }
    });*/
