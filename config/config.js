module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT_NUMBER,
    dialect: 'postgres',
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT_NUMBER,
    dialect: 'postgres',
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT_NUMBER,
    dialect: 'postgres',
  },
};
