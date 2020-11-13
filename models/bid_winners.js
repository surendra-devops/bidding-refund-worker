'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bid_winners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bid_winners.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    user_id: DataTypes.UUID,
    event_id: DataTypes.UUID,
    product_id: DataTypes.UUID,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    full_name: DataTypes.STRING,
    has_claimed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    pincode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bid_winners',
  });
  return bid_winners;
};
