const Role = require("../models/roles");
const User = require("../models/users");

Role.hasOne(User);
User.belongsTo(Role);
