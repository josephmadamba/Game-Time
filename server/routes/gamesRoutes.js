
const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: false
  })
)
const bcrypt = require('bcrypt')
const saltRounds = 10
const dbGames = require('../dataBase/gamesdb')

module.exports = router

router.post('/games/create/', (req, res) => {
  let input = req.body
  dbGames.createGames(input.date, input.day, input.time, input.title, input.description, input.user)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})

router.get('/api/dashboard/:user_id', (req, res) => {
  console.log('------------HELP-----------')
  console.log(req.params.user_id)
  if(req.params.user_id){

  }else{
  dbGames.getGames()
    .then(data => {
      // Deletes games that are expired
      data.map((games, index) => {
        let dateAndTime = games.dataValues.date+'T'+games.dataValues.time
        // console.log('---------------------------------')
        // console.log('This is the date' ,new Date(),games.dataValues.date, Date.parse(games.dataValues.date), Date.parse(dateAndTime))
        // console.log('---------------------------------')
        if (Date.parse(dateAndTime) < Date.parse(new Date())) {
          return data[index].destroy()
        }
      })
      res.send({ success: true, data: data })
    })
    .catch(er => {
      console.log(er)
      res.send({ success: false, er: er })
    })
  }
})

router.post('/mygames', (req, res) => {
  dbGames.addMyGames(
    req.body.userID,
    req.body.gameID,
    req.body.dateJoin,
    req.body.timeJoin,
    req.body.titleJoin,
    req.body.descriptionJoin)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})

router.get('/mygames', (req, res) => {
  dbGames.getAllPlayerJoined(parseInt(req.query.user))
    .then(data => {
      console.log('data in router ', data)
      res.send({ success: true, data: data })
    })
    .catch(er => {
      console.log(er)
      res.send({ success: false, er: er })
    })
})


router.delete('/api/delete/games', (req,res)=>{
  console.log(req.query)
  let id = req.query.id
  dbGames.deleteGames(id)
  .then(data=>{
    console.log('----------')
    console.log(data)
    res.send(data)
  })
  .catch(er=>{
    console.log(er)
  })
})