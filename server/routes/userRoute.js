
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



router.post('/pickup/create/user', (req,res)=>{
    let user = req.body.user
    if(user.username){
        bcrypt.hash(user.password, saltRounds)
        .then(password=>{
            userdb.createUser(user.username, password)
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
    }

})