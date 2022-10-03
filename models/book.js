'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Shop);
      Book.belongsTo(models.User);
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      price: DataTypes.NUMBER,
      quantity: DataTypes.NUMBER,
      shop_id: DataTypes.NUMBER,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Book',
    },
  );
  return Book;
};
