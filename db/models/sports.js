const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});

const Sports = db.define('Sports', {
  sport: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

module.exports = Sports
