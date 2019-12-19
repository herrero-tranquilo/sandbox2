const models = require("../models");

module.exports.getUsers = () => {
  const users = models.User.findAll();
  return users;
};
