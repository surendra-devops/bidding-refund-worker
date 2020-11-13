'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bidding_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bidding_events.hasOne(models.bid_winners, {
        foreignKey: 'event_id',
        as: 'bid_winners',
        onDelete: 'SET NULL'
      });

      bidding_events.hasOne(models.user_bids, {
        foreignKey: 'bid_event_id',
        as: 'user_bids',
        onDelete: 'SET NULL'
      });
    }
  };
  bidding_events.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    number_of_winners: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    winner_rewards: DataTypes.ARRAY(DataTypes.TEXT),
    priority: DataTypes.INTEGER,
    starting_bid: DataTypes.REAL,
    product_id: DataTypes.UUID,
    min_bid_incr_val: DataTypes.INTEGER,
    max_bid_incr_prcnt: DataTypes.INTEGER,
    event_description: DataTypes.TEXT,
    event_type: DataTypes.TEXT,
    withdraw_end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'bidding_events',
  });
  return bidding_events;
};
