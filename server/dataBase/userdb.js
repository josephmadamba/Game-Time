
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
    createUser: createUser,
    checkLogin: checkLogin

}
module.exports = userdb


function createUser(username, hash, email){
        return new Promise((resolve, reject)=>{
            db.User.findOrCreate({
                where:{username: username},  
                defaults:{
                    username: username,
                    password: hash,
                    email: email
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


function checkLogin(username, password){
    return new Promise((resolve, reject)=>{
        db.User.findOne({where:{username: username}})
        .then(user=>{
            bcrypt.compare(password, user.dataValues.password, (err, correct)=>{
                if(correct){
                    resolve({correct: true, user: user.dataValues})
                }else{
                    reject({correct:false, error: err})
                }
        })
    })
})
}


