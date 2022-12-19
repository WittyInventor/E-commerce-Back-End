const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// sequelize is a method that connects mysql to node/javascript.

class category extends Model {}

category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
// timestamps tells the code to document the time whenever there's an update of information in the table
    freezeTableName: true,
    // the table name stays the same(freeze) it cannot change using freeze table name
    underscored: true,
    // underscored: true - means the code will automatically convert to underscore if it is not already in underscored.
    modelName: 'category',
  }
);

module.exports = category;