const Sequelize = require('sequelize');
let Sports = require('./sports.js')
let Teams = require('./teams.js');
let SocialMedia = require('./socialMedia.js');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});

const Athletes = db.define('Athletes', {
  firstName: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  nationality: {
    type: Sequelize.TEXT
  },
  gender: {
    type: Sequelize.TEXT
  },
  birthday: {
    type: Sequelize.DATE
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
})


Athletes.belongsTo(Sports)
Athletes.belongsTo(Teams)
Athletes.hasOne(SocialMedia)

module.exports = Athletes
