const { Roles } = require("../roles");
const { Users } = require("../users");

Users.hasOne(Roles);
Roles.belongsTo(Users);

module.exports = {
  Users,
  Roles,
};
