'use strict';
// these were just here to fill in initial states for my DB
// can either use SEEDERS or just implement the data with Postman

// allows for PRIORITIES and STATUS to be assigned to the cards by ID number


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priorities', [
    {
      kind: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Blocker',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('priorities', [
    {
      kind: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Blocker',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }
};
