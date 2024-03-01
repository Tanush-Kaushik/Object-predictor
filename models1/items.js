import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const item = sequelize.define('items', {
  item_id: {
    type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    item_name: DataTypes.STRING
});
