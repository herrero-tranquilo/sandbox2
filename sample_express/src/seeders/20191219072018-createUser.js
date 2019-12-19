"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          userId: "test",
          name: "test",
          engName: "kimyongkuk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: "test2",
          name: "test2",
          engName: "kimyongkuk2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
