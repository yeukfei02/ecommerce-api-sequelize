'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
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

      await queryInterface.addIndex('Users', ['email']);
      await queryInterface.addIndex('Users', ['password']);
      await queryInterface.addIndex('Users', ['created_at']);
      await queryInterface.addIndex('Users', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Users');

      await queryInterface.removeIndex('Users', ['email']);
      await queryInterface.removeIndex('Users', ['password']);
      await queryInterface.removeIndex('Users', ['created_at']);
      await queryInterface.removeIndex('Users', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
};
