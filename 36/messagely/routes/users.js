


                    // USER ROUTES
                    // - HANDLE ERRORS



const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/user");
const router = new express.Router();
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config");
const { ensureLoggedIn } = require('../middleware/auth')



                    // MAIN VIEW HANDLERS



//GET list of all users
router.get("/", async function(req, res, next) {
    try {
        const users = await User.all();
        return res.json({users: users})
    } catch (e) {
        return next(e);
    }
});

//GET user by username
router.get('/:username', async function (req,res,next){
    try{
        const {username} = req.params
        const user = await User.get(username)
        console.log(username)
        return res.json({user: user})
    }
    catch(e){
        return next(e)
    }
})

router.get('/secret', ensureLoggedIn, async function(req,res,next){
    try{
        return res.json('TOP SECRZET PUYRPLE SECRZET')
    }
    catch(e){
        return next(e)
    }
})



module.exports = router


/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
