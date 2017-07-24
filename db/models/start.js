const Athletes = require('./athletes.js');
const SocialMedia = require('./socialMedia.js');
const Sports = require('./sports.js');
const About = require('./about.js');
const Teams = require('./teams.js');
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});
// and our server is created in 'server.js'


const seeder = function(table, data) {
  let promises = []
  data.forEach(question => {
    table.create(question)
      .then(promise => promises.push(promise))
  })
  Promise.all(promises)
}


const athleteProfile =
[{firstName: 'Edward', lastName: 'Goo', nationality: 'American', gender: 'Male', birthday:'01/07/1909', email:'ed@yahoo.com', SportId: 4, TeamId: 20},
{firstName: 'John', lastName: 'Davis', nationality: 'Canadian', gender: 'Male', birthday:'02/07/1929', email:'john@yahoo.com', SportId: 2, TeamId: 10},
{firstName: 'Apple', lastName: 'Candy', nationality: 'American', gender: 'Female', birthday:'03/27/1979', email:'candy@candy.com',  SportId: 6, TeamId: 4},
{firstName: 'Samantha', lastName: 'Girl', nationality: 'American', gender: 'Female', birthday:'07/17/1989', email:'sama@sama.com', SportId: 10, TeamId: 14},
]


const socialProfile = [{twitter: 'ed', facebook: 'edgreat', instagram: 'edInsta', AthleteId: 1},
{twitter: 'john', facebook: 'johngreat', instagram: 'johnInsta', AthleteId: 2},
{twitter: 'appleTwi', facebook: 'apple', instagram: 'apInsta', AthleteId: 3},
{twitter: 'samTha', facebook: 'samFb', instagram: 'samInsta', AthleteId: 4},
]

const aboutMe = [{description: "The best basketball player in NBA", location: "NYC", AthleteId: 1},
{description: "The greatest", location: "ORD", AthleteId: 2},
{description: "Professional Singer", location: "Chi", AthleteId: 3},
{description: "Actress ", location: "LA", AthleteId: 4},
]

const allSports = [
{sport : "Golf"},
{sport : "Tennis"},
{sport : "Cricket"},
{sport : "Basketball"},
{sport : "Baseball"},
{sport : "American Football"},
{sport : "Aquatics"},
{sport : "Archery"},
{sport : "Automobile Racing"},
{sport : "Badminton"},
{sport : "Beach Volleyball"},
{sport : "Bobsleigh"},
{sport : "Body Building"},
{sport : "Boxing"},
{sport : "Cross Country Running"},
{sport : "Cross Country Skiing"},
{sport : "Curling"},
{sport : "Cycling"},
{sport : "Darts"},
{sport : "Decathlon"},
{sport : "Down Hill Skiing"},
{sport : "Equestrianism"},
{sport : "eSports"},
{sport : "Fencing"},
{sport : "Field Hockey"},
{sport : "Figure Skating"},
{sport : "Gymnastics"},
{sport : "Ice Hockey"},
{sport : "Martial Arts"},
{sport : "Mixed Martial Arts"},
{sport : "Modern Pentathlon"},
{sport : "Motorcycle Racing"},
{sport : "Netball"},
{sport : "Polo"},
{sport : "Racquetball"},
{sport : "Rowing"},
{sport : "Rugby"},
{sport : "Sailing"},
{sport : "Softball"},
{sport : "Shooting"},
{sport : "Skateboarding"},
{sport : "Skeet Shooting"},
{sport : "Skeleton"},
{sport : "Snow Boarding"},
{sport : "Soccer (Football)"},
{sport : "Squash"},
{sport : "Surfing"},
{sport : "Swimming"},
{sport : "Track and Field"},
{sport : "Other"}
]

const allTeams = [
{team : "Atlanta Hawks", SportId: 4},
{team : "Boston Celtics", SportId: 4},
{team : "Brooklyn Net", SportId: 4},
{team : "Charlotte Bobcats", SportId: 4},
{team : "Chicago Bulls", SportId: 4},
{team : "Cleveland Cavaliers", SportId: 4},
{team : "Dallas Mavericks", SportId: 4},
{team : "Denver Nuggets", SportId: 4},
{team : "Detroit Pistons", SportId: 4},
{team : "Golden State Warriors", SportId: 4},
{team : "Houston Rockets", SportId: 4},
{team : "Indiana Pacers", SportId: 4},
{team : "LA Clippers", SportId: 4},
{team : "LA Lakers", SportId: 4},
{team : "Memphis Grizzlies", SportId: 4},
{team : "Miami Heat", SportId: 4},
{team : "Milwaukee Bucks", SportId: 4},
{team : "Minnesota Timberwolves", SportId: 4},
{team : "New Orleans Hornets", SportId: 4},
{team : "New York Knicks", SportId: 4},
{team : "Oklahoma City Thunder", SportId: 4},
{team : "Orlando Magic", SportId: 4},
{team : "Philadelphia Sixers", SportId: 4},
{team : "Phoenix Suns", SportId: 4},
{team : "Portland Trail Blazers", SportId: 4},
{team : "Sacramento Kings", SportId: 4},
{team : "San Antonio Spurs", SportId: 4},
{team : "Toronto Raptors", SportId: 4},
{team : "Utah Jazz", SportId: 4},
{team : "Washington Wizard", SportId: 4},
]

Sports.sync({force:true})
.then(() => seeder(Sports, allSports))
.then(() => Athletes.sync({force:true}))
.then(() => seeder(Athletes, athleteProfile))
.then(() => SocialMedia.sync({force:true}))
.then(() => seeder(SocialMedia, socialProfile))
.then(() => About.sync({force:true}))
.then(() => seeder(About, aboutMe))
.then(() => Teams.sync({force:true}))
.then(() => seeder(Teams, allTeams))
.then(() => console.log('all synced'))
.catch(err => console.log(err))
