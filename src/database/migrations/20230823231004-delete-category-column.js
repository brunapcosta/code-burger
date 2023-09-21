'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('products', 'category');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createcolumn('products', {
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },
};
