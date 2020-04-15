"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "Jane Doe",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "Hue Mat",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
