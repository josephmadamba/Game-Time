
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



const userdb = {
    createUser: createUser

}
module.exports = userdb


function createUser(username, password){
        return new Promise((resolve, reject)=>{
            db.User.findOrCreate({
                where:{username: username},  
                default:{
                    username: username,
                    password: password
                }
            })
            .spread((user, created)=>{
                let data ={user: user, created: created}
                resolve(data)
            })
            .catch(er=>{
                reject(er)
            })

        })

}


