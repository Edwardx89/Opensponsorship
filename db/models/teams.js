const Sequelize = require('sequelize');
let Sports = require('./sports.js')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});

const Teams = db.define('Teams', {
  team: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

module.exports = Teams
Teams.belongsTo(Sports);
