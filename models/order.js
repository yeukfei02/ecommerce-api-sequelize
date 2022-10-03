'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Shop);
      Order.belongsTo(models.User);
    }
  }
  Order.init(
    {
      order_detail: DataTypes.STRING,
      shop_id: DataTypes.NUMBER,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
