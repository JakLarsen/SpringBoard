


            // USER MODEL



const ExpressError = require('../expressError')
const client = require('../db')
const bcrypt = require('bcrypt')
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const jwt = require('jsonwebtoken')



          //USER CLASS FOR SITE LOGIN


          
class User {

  //RETURN {username, first_name, last_name, phone}
  static async register({username, password, first_name, last_name, phone}, next) {
    try {
      if (!username || !password || !first_name || !last_name || !phone) {
        throw new ExpressError("Username, password, first name, last name, and phone required", 400);
      }
      // hash password
      const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
      const join_at =  new Date();
      console.log(join_at)
      // save to db
      const results = await client.query(`
        INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING username, first_name, last_name, phone`,
        [username, hashedPassword, first_name, last_name, phone, join_at, join_at]);
      return results.rows[0]
    } 
    catch (e) {
      return next(e)
    }
  }

   //LOG A USER IN
   static async login(username, password) { 
    try {
      if (!username || !password) {
        throw new ExpressError("Username and password required", 400);
      }
      const results = await client.query(
        `SELECT username, password 
         FROM users
         WHERE username = $1`,
        [username]);
      const user = results.rows[0];
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({ username }, SECRET_KEY);
          return { message: `Authenticated!`, token }
        }
      }
      throw new ExpressError("Invalid username/password", 400);
    } 
    catch (e) {
      return next(e);
    }
  }

  //CHECKS USER/PASS COMBO AUTH
  //RETURNS BOOLEAN
  static async authenticate(username, password){
    try {
      if (!username || !password) {
        throw new ExpressError("Username and password required", 400);
      }
      const results = await client.query(
        `SELECT username, password 
         FROM users
         WHERE username = $1`,
        [username]);
      const user = results.rows[0];
      if (user) {
        return await bcrypt.compare(password, user.password)
      }
      throw new ExpressError("Invalid username/password", 400);
    } 
    catch (e) {
      return next(e);
    }
  }

  //UPDATE LAST LOGIN
  static async updateLoginTimestamp(username) { 
    try{
      const last_login_at = new Date()
      const update = client.query(
        `UPDATE users
        SET last_login_at = $1
        WHERE username = $2`,
        [last_login_at, username]
      )
      return last_login_at
    }
    catch(e){

    }
  }

  //GET BASIC INFOR FOR ALL USERS
  static async all() {
    try{
      const users = await client.query(
        `SELECT username, first_name, last_name, phone
        FROM users`
      )
      return users.rows
    }
    catch(e){
      return next(e)
    }
  }

  //GET A USER BY USERNAME
  static async get(username) {
    try{
      if (!username) {
        throw new ExpressError("Invalid username", 400);
      }
      const user = await client.query(
        `SELECT username, first_name, last_name, phone, join_at, last_login_at
        FROM users
        WHERE username = $1`,
        [username]
      )
      return user.rows[0]
    }
    catch(e){

    }

  }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) { }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {id, first_name, last_name, phone}
   */

  static async messagesTo(username) { }
}


module.exports = User;