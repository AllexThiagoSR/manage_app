import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || '123456',
  database: process.env.DB_NAME || 'manager_db',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  logging: true,
  dialectOptions: {
    timezone: 'Z'
  }
};

export = config
