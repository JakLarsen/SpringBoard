


          // IMPORTS



const express = require("express");
const User = require("../models/user");
const router = new express.Router();



          // MAIN VIEW HANDLERS



// GET / - get list of users.
router.get("/", async function(req, res, next) {
  try {
    const users = await User.all();
    return res.json({users: users})
  } catch (e) {
    return next(e);
  }
});



module.exports = router

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}


/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/


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
