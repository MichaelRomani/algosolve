require('dotenv').config()
const Sequelize = require('sequelize')
const db = new Sequelize({
  host: 'capstone.cjxkwcrckygx.us-east-1.rds.amazonaws.com',
  username: 'testName',
  password: 'testName',
  port: 5432,
  dialect: 'postgres',
  database: 'capstone',
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en'
});

module.exports = db
