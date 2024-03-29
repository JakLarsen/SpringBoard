"use strict";

/** Convenience middleware to handle common auth cases in routes. */

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../expressError");


/** Middleware: Authenticate user.
 *
 * If a token was provided, verify it, and, if valid, store the token payload
 * on res.locals (this will include the username and isAdmin field.)
 * 
 * HOW IS THIS TOKEN BEING PROVIDED - WHY IS THIS NOT EXPLAINED TO US - BAD DOC
 *
 * It's not an error if no token was provided or if the token is not valid.
 */

function authenticateJWT(req, res, next) {
  // console.log("Running authJWT")
  try {
    console.log(req.headers, req.headers.authorization)
    const authHeader = req.headers && req.headers.authorization;
    // console.log(authHeader)
    if (authHeader) {
      const token = authHeader.replace(/^[Bb]earer /, "").trim();
      res.locals.user = jwt.verify(token, SECRET_KEY);
    }
    return next();
  } catch (err) {
    return next();
  }
}

/** Middleware to use when they must be logged in.
 *
 * If not, raises Unauthorized.
 */

function ensureLoggedIn(req, res, next) {
  try {
    console.log("In ensureLoggedIn")
    console.log(res.locals)
    if (!res.locals.user) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
}

/**Middleware to use to ensure the User had the flag is_admin in database 
 * 
 * If not, raises Unauthorized Error
*/

function ensureIsAdmin(req, res, next){
  try{
    //solution says there's an isAdmin property on this piece, so I'm going to stay within prior format
    if (!res.locals.user || !res.locals.user.is_admin) {
      throw new UnauthorizedError()
    }
  }
  catch(e){
    return next(e)
  }
}

function ensureIsAdminOrUser(req, res, next){
  try{
    if (!res.locals.user || 
      (!res.locals.user.is_admin && res.locals.user.username !== req.params.username)) {
      throw new UnauthorizedError()
    }
  }
  catch(e){
    return next(e)
  }
}

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureIsAdmin,
  ensureIsAdminOrUser
};
