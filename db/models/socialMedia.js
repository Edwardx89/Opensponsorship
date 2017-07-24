const Sequelize = require('sequelize');
let Athletes = require('./athletes.js');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});

const SocialMedia = db.define('SocialMedia', {
  twitter: {
    type: Sequelize.TEXT,
  },
  facebook: {
    type: Sequelize.TEXT
  },
  instagram: {
    type: Sequelize.TEXT
  }
})


// SocialMedia.belongsTo(Athletes)

module.exports = SocialMedia
