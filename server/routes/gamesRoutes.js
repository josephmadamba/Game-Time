

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

router.get('/dashboard', (req, res) => {
  dbGames.getGames()
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      console.log(er)
      res.send({ success: false, er: er })
    })
})

router.get('/user/games', (req, res)=>{
  console.log(req.query.user)
  dbGames.getAllPlayerJoined(parseInt(req.query.user))
  .then(data=>{
    res.send(data)
  })
  .catch(er=>{
    res.send(er)
  })
})