const ExpressError = require('./expressError')
const userRoutes = require('./userRoutes')



function logger(req, res, next){
    console.log(`RECEIVED ${req.method} request to ${req.path}.`)
    return next()
}

function checkForPassword(req, res, next){
    try{
        if(req.query.password !== 'cool'){
            throw new ExpressError("Invalid Password", 402)
        }
        else{
            return next()
        }
    }
    catch(e){
        next(e)
    }
}





module.exports = {logger, checkForPassword}