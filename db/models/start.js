const db = require('./model1.js');

// and our server is created in 'server.js'

db.sync()  // sync our database
.then(() => require('../../app.js')) // then start our express server
