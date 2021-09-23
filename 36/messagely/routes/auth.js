


                    //AUTHORIZATION ROUTES
                    // - HANDLE ERRORS



const express = require("express");
const router = new express.Router();
const bcryp = require('bcrypt')
const ExpressError = require("../expressError");
const client= require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const User = require("../models/user");



router.post('/register', async (req, res, next) => {
    try{
        const { username, password, first_name, last_name, phone } = req.body;
        //REGISTER USER
        const userObj = {username: username, password: password, first_name: first_name, last_name: last_name, phone: phone}
        const user = await User.register(userObj, next)
        //LOGIN USER
        const loginResults = await User.login(username, password)
        return res.status(201).json({user: user, loginResults: loginResults})
    }
    catch(e){
        next(e)
    }
});

router.post('/login', async (req, res, next) =>{
    const {username, password} = req.body
    const loginResults = await User.login(username, password)
    const lastLogin = await User.updateLoginTimestamp(username)
    return res.json({loginResults: loginResults, lastLogin: lastLogin})
})



module.exports = router