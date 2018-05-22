require('dotenv').config()
const Sequelize = require('sequelize')
const db = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  database: process.env.DB_DATABASE,
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en'
});

module.exports = db
