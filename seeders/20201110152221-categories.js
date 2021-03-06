'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('ProductCategories', [
     {
       name: "Unassigned",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "House Plants",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Small Plants",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Succulents",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Terrariums",
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ProductCategories', null, {})
  }
};
