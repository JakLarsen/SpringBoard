/** Middleware for handling req authorization for routes. */

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");

/** Middleware: Authenticate user. */

function authenticateJWT(req, res, next) {
  try {
    const tokenFromBody = req.body._token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload; // create a current user
    console.log('You have a valid token!')
    return next();
  } catch (err) {
    return next();
  }
}

/** Middleware: Requires user is authenticated. */

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return next({ status: 401, message: "Unauthorized" });
  } else {
    return next();
  }
}

/** Middleware: Requires correct username. */

function ensureCorrectUser(req, res, next) {
  try {
    if (req.user.username === req.params.username) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}

function ensureToOrFromUser(req, toUser, fromUser){
  try {
    if (req.user.username === toUser || req.user.username === fromUser) {
      return true
    } else {
      throw new ExpressError("Unauthorized", 401)
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    throw new ExpressError("Unauthorized", 401)
  }
}

function ensureToUser(req, toUser){
  try {
    if (req.user.username === toUser) {
      return true
    } else {
      throw new ExpressError("Unauthorized", 401)
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    throw new ExpressError("Unauthorized", 401)
  }
}
  
// end

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureCorrectUser,
  ensureToOrFromUser,
  ensureToUser
};
