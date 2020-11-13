'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bid_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bid_products.hasOne(models.bidding_events, {
        foreignKey: 'product_id',
        as: 'bidding_events',
        onDelete: 'SET NULL'
      });
    }
  };
  bid_products.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    product_details: DataTypes.STRING,
    product_images: DataTypes.ARRAY(DataTypes.TEXT),
    actual_price: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bid_products',
  });
  return bid_products;
};
