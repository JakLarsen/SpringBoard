const express = require("express");
const router = new express.Router();
const bcryp = require('bcrypt')
const ExpressError = require("../expressError");
const client= require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const User = require("../models/user");
// const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.get('/', async(req, res, next) =>{
    res.json('You hit Auth route')
})

router.post('/register', async (req, res, next) => {
    try{
        const { username, password, first_name, last_name, phone } = req.body;
        const userObj = {username: username, password: password, first_name: first_name, last_name: last_name, phone: phone}
        const user = await User.register(userObj, next)
        return res.status(201).json({user: user})
    }
    catch(e){
        next(e)
    }

});



module.exports = router