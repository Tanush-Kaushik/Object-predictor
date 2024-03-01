import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const user = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING
});
