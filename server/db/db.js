require('dotenv').config()
const Sequelize = require('sequelize')
const db = new Sequelize({
  host: 'NAN',
  username: 'NAN',
  password: 'NAN'
  ,
  port: 5432,
  dialect: 'postgres',
  database: 'NAN',
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en'
});

module.exports = db
