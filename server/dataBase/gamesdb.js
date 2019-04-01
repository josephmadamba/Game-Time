const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const db = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const gamesdb = {
  // Reference functions I have down below
  createGames: createGames,
  getGames: getGames,
  getAllPlayerJoined: getAllPlayerJoined,
  addMyGames,
  deleteGames,
  getUserCreateed,
  deleteCreatedGame
};
module.exports = gamesdb;

function createGames(date, day, time, title, description, userId, gameSt, gameAddress, gameCity, gameZip) {
  // THIS FUNCTION WILL RETURN A PROMISE

  return new Promise((resolve, reject) => {
    //  BUILDING GAMES
    db.Game.build({
      date: date,
      day: day,
      time: time,
      title: title,
      description: description,
      user_id: userId,
      state: gameSt,
      address: gameAddress,
      city: gameCity,
      zip: gameZip
    })
      .save()
      .then(resoluts => {
        resolve(resoluts);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function getGames() {
  return new Promise((resolve, reject) => {
    // FINDING GAMES AND ORDERING IT IN DESC ORDER SO WE GET THE NEWEST FIRST
    db.Game.findAll({
      order: [["id", "DESC"]]
    })
      .then(games => {
        console.log("games", games);
        resolve(games);
      })
      .catch(er => {
        console.log("This is er", er);
        reject(er);
      });
  });
}

function getAllPlayerJoined(user_id) {
  return new Promise((resolve, reject) => {
    db.GameJoinedUser.findAll({
      where: {
        user_id: user_id
      },
      order: [["id", "DESC"]]
    })
      .then(res => {
        console.log(
          "This should be the results from getAllPlayersJoined",
          res.dataValues
        );
        resolve(res);
      })
      .catch(er => {
        console.log("This is the error", er);
        reject(er);
      });
  });
}

function addMyGames(
  userID,
  gameID,
  dateJoin,
  timeJoin,
  titleJoin,
  descriptionJoin,
  cityJoin,
  stateJoin,
  zipJoin,
  addressJoin
) {
  return new Promise((resolve, reject) => {
    db.GameJoinedUser.create({
      user_id: userID,
      game_id: gameID,
      date: dateJoin,
      time: timeJoin,
      title: titleJoin,
      description: descriptionJoin,
      city: cityJoin,
      state: stateJoin,
      zip: zipJoin,
      address: addressJoin
    })
      .then(resoluts => {
        resolve(resoluts);
      })
      .catch(er => {
        console.log("This is the error", er);
        reject(er);
      });
  });
}

function deleteGames(user_id, game_id) {
  return new Promise((resolve, reject) => {
    db.GameJoinedUser.findAll({
      where: { user_id: user_id, game_id: game_id }
    })
      .then(res => {
        console.log(res[0]);
        res[0]
          .destroy()
          .then(data => {
            console.log(data);
            resolve({ success: true });
          })
          .catch(er => {
            reject({ success: false, error: er });
          });
      })
      .catch(er => {
        reject({ success: false, error: er });
      });
  });
}

function getUserCreateed(user_id) {
  console.log("-----------");
  console.log(user_id);
  return new Promise((resolve, reject) => {
    db.Game.findAll({
      where: { user_id: user_id }
    })
      .then(res => {
        resolve(res);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function deleteCreatedGame(user_id, game_id) {
  console.log(user_id, game_id);
  return new Promise((resolve, reject) => {
    db.Game.findAll({
      where: {
        user_id: user_id,
        id: game_id
      }
    })
      .then(res => {
        res[0]
          .destroy()
          .then(data => {
            console.log(data);
            resolve({ success: true });
          })
          .catch(er => {
            reject({ success: false, error: er });
          });
      })
      .catch(er => {
        console.log("data", er);
        reject(er);
      });
  });
}
