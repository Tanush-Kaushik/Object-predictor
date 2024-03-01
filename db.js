import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dbtemp', 'root', 'hello123', {
    host: 'localhost',
    dialect: 'mysql'
});
