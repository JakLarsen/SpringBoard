/** User class for message.ly */
const ExpressError = require('../expressError')
const client = require('../db')
const bcrypt = require('bcrypt')
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");




/** User of the site. */

class User {

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

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
      return results.rows
    } 
    catch (e) {
      return next(e)
    }
  }





  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    try{
      const users = await client.query(
        `SELECT username, first_name, last_name, phone
        FROM users`
      )
      console.log(users.rows)
      return users.rows
    }
    catch(e){
      return next(e)
    }
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) { }

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