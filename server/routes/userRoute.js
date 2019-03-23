
const express = require("express");
const router = express.Router();


const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = router;

const userdb = require('../dataBase/userdb')
const validator = require("email-validator");


router.post('/pickup/create/user', (req,res)=>{
    let user = req.body.user
    console.log(user)
    if(user.username){
        if (validator.validate(user.email)){
        bcrypt.hash(user.password, saltRounds)
        .then(password=>{
            console.log('This is the password', password)


            userdb.createUser(user.username, password, user.email)
                .then(data=>{
                    if(data.created){
                        res.send({success: true, user: data.user.dataValues})
                    }else{
                        res.send({success: false, error:'User is already created'})
                    }
                })
                .catch(er=>{
                    res.send({success: false, error: er})
                })
        })
    }else{
        res.send({success: false, error: er})
    }
    }

})

router.get('/pickup/login', (req, res)=>{
    let username = req.query.username
    let password = req.query.password


    userdb.checkLogin(username, password)
    .then(data=>{
        if(data.correct){
            res.send({success: true, user: data.user})
        }else{
            res.send({success: false})
        }
    })

})