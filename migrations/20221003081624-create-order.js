'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        order_detail: {
          type: Sequelize.STRING,
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

      await queryInterface.addIndex('Orders', ['order_detail']);
      await queryInterface.addIndex('Orders', ['shop_id']);
      await queryInterface.addIndex('Orders', ['user_id']);
      await queryInterface.addIndex('Orders', ['created_at']);
      await queryInterface.addIndex('Orders', ['updated_at']);
    } catch (e) {
      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Orders');

      await queryInterface.removeIndex('Orders', ['order_detail']);
      await queryInterface.removeIndex('Orders', ['shop_id']);
      await queryInterface.removeIndex('Orders', ['user_id']);
      await queryInterface.removeIndex('Orders', ['created_at']);
      await queryInterface.removeIndex('Orders', ['updated_at']);
    } catch (e) {
      await transaction.rollback();
    }
  },
};
