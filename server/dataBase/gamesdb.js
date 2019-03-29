const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const db = require('../models')

const bcrypt = require('bcrypt')
const saltRounds = 10

const gamesdb = {
  // Reference functions I have down below
  createGames: createGames,
  getGames: getGames,
  getAllPlayerJoined: getAllPlayerJoined,
  addMyGames,
  getMyGames
}
module.exports = gamesdb

function createGames (date, day, time, title, description, userId) {
  // THIS FUNCTION WILL RETURN A PROMISE

  return new Promise((resolve, reject) => {
    //  BUILDING GAMES
    db.Game.build({
      date: date,
      day: day,
      time: time,
      title: title,
      description: description,
      user_id: userId
    })
      .save()
      .then(resoluts => {
        resolve(resoluts)
      })
      .catch(er => {
        reject(er)
      })
  })
}

function getGames () {
  return new Promise((resolve, reject) => {
    // FINDING GAMES AND ORDERING IT IN DESC ORDER SO WE GET THE NEWEST FIRST
    db.Game.findAll({
      order: [['id', 'DESC']]
    })
      .then(games => {
        console.log('games', games)
        resolve(games)
      })
      .catch(er => {
        console.log('This is er', er)
        reject(er)
      })
  })
}

function getAllPlayerJoined (user_id) {
  return new Promise((resolve, reject) => {
    db.GameJoinedUser.findAll({
      where: {
        user_id: user_id
      },
      order: [['id', 'DESC']]
      // include: [{ model: db.Game }]
    })
      .then(res => {
        console.log(
          '------------------------------------------------------------'
        )
        console.log(
          'This should be the results from getAllPlayersJoined',
          res.dataValues
        )

        resolve(res)
      })
      .catch(er => {
        console.log('This is the error', er)
        reject(er)
      })
  })
}

function addMyGames (userID, gameID, dateJoin, timeJoin, titleJoin, descriptionJoin) {
  return new Promise((resolve, reject) => {
    db.GameJoinedUser.create({
      user_id: userID,
      game_id: gameID,
      date: dateJoin,
      time: timeJoin,
      title: titleJoin,
      description: descriptionJoin
    })
      .then(resoluts => {
        resolve(resoluts)
      })
      .catch(er => {
        console.log('This is the error', er)
        reject(er)
      })
  })
}

function getMyGames (userID) {
  return new Promise((resolve, reject) => {
    console.log('this is userID in getMygames ', userID)
    db.GameJoinedUser.findAll({
      where: { user_id: userID },
      order: [['id', 'DESC']],
      include: [{ model: db.Game }]
    })
      .then(games => {
        console.log('games=========================================================================', games)
        resolve(games)
      })
      .catch(er => {
        console.log('This is er', er)
        reject(er)
      })
  })
}
