'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Shops', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

      await queryInterface.addIndex('Shops', ['name']);
      await queryInterface.addIndex('Shops', ['address']);
      await queryInterface.addIndex('Shops', ['created_at']);
      await queryInterface.addIndex('Shops', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Shops');

      await queryInterface.removeIndex('Shops', ['name']);
      await queryInterface.removeIndex('Shops', ['address']);
      await queryInterface.removeIndex('Shops', ['created_at']);
      await queryInterface.removeIndex('Shops', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
};
