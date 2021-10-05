'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Movies', {
      fields: ['user_id'],
      type: 'FOREIGN KEY',
      name: 'user_id-fk-in-Movies',
      references: {
        table: 'Users', 
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Movies',
      'user_id-fk-in-Movies'
    )
  }
};
