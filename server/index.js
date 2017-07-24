const router = require('express').Router();
const Athletes = require('../db/models/athletes')
const Sports = require('../db/models/sports')
const Teams = require('../db/models/teams')
const SocialMedia = require('../db/models/socialMedia')
const About = require('../db/models/about')

router.get('/athletes', (req, res, next) => {
  Athletes.findAll({
    include: [{all:true, nested: true}]
  })
    .then(athletes => {
      console.log(athletes)
      res.send(athletes)})
    .catch(next);
})

router.post('/athlete', (req, res, next) => {
  Athletes.create(req.body)
    .then(createdAthlete => {
      return createdAthlete.get({plain:true})
    })
    .then( (athlete) => {
      const info = {AthleteId: athlete.id, description: req.body.description, location: req.body.location, twitter:req.body.twitter, facebook: req.body.facebook, instagram: req.body.instagram}
      SocialMedia.create(info)
      return About.create(info)
    })
    .then((data) => {
      res.send(data)
    })
    .catch(next);
})

router.put('/athlete/:id', (req, res, next) => {
  console.log('in the router put server', req.params.id, 'and this is the body', req.body)
  Athletes.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then( () => {
      SocialMedia.update(req.body, {
        where: {AthleteId: req.params.id}
      })
    })
    .then( () => {
      return About.update(req.body, {
        where: {AthleteId: req.params.id}
      })
    })
    .then((data) => {
      res.send(data)
    })
    .catch(next);
})

router.get('/athlete/:id', (req, res, next) => {
  console.log('hitting server id', req.params)
  About.findAll({
    where: {
      AthleteId: req.params.id
    },
    include: [{all: true, nested: true}]
  })
    .then(athlete => res.send(athlete))
    .catch(next);
})

router.get('/sports', (req, res, next) => {
  Sports.findAll()
    .then(sports => res.send(sports))
    .catch(next);
})

router.get('/teams', (req, res, next) => {
  Teams.findAll()
    .then(teams => res.send(teams))
    .catch(next);
})


router.post('/about', (req, res, next) => {
  console.log('hit server api about', req.body)
  About.create(req.body)
    .then(createAbout => res.send(createAbout))
    .catch(next);
})

router.post('/socialMedia', (req, res, next) => {
  console.log('hit server api socialMedia', req.body)
  SocialMedia.create(req.body)
    .then(createdSocial => res.send(createdSocial))
    .catch(next);
})

module.exports = router;
