const models = require("../models");

module.exports.getUsers = () => {
  const users = models.User.findAll();
  return users;
};
module.exports.addUsers = data => {
  const { userId, name, engName } = data;
  const users = models.User.create({
    userId,
    name,
    engName,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return users;
};
