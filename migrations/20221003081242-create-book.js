'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Books', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        author: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.NUMBER,
        },
        quantity: {
          type: Sequelize.NUMBER,
        },
        shop_id: {
          type: Sequelize.NUMBER,
          references: {
            model: {
              tableName: 'Shops',
              schema: 'schema',
            },
            key: 'id',
          },
        },
        user_id: {
          type: Sequelize.NUMBER,
          references: {
            model: {
              tableName: 'Users',
              schema: 'schema',
            },
            key: 'id',
          },
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

      await queryInterface.addIndex('Books', ['name']);
      await queryInterface.addIndex('Books', ['author']);
      await queryInterface.addIndex('Books', ['price']);
      await queryInterface.addIndex('Books', ['quantity']);
      await queryInterface.addIndex('Books', ['shop_id']);
      await queryInterface.addIndex('Books', ['user_id']);
      await queryInterface.addIndex('Books', ['created_at']);
      await queryInterface.addIndex('Books', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Books');

      await queryInterface.removeIndex('Books', ['name']);
      await queryInterface.removeIndex('Books', ['author']);
      await queryInterface.removeIndex('Books', ['price']);
      await queryInterface.removeIndex('Books', ['quantity']);
      await queryInterface.removeIndex('Books', ['shop_id']);
      await queryInterface.removeIndex('Books', ['user_id']);
      await queryInterface.removeIndex('Books', ['created_at']);
      await queryInterface.removeIndex('Books', ['updated_at']);

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },
};
