const express = require('express')
const ExpressError = require('./expressError')

const app = express()
app.use(express.json())

const userRoutes = require('./routes/users')
app.use("/users", userRoutes)






//If nothing else runs, generic 404
app.use((req,res,next)=>{
    const e = new ExpressError("Page not found", 404)
    next(e)
})

//Otherwise we use an error handler
app.use((error, req, res, next)=>{
    let status = error.status || 500
    let msg =  error.msg
    res.status(status).send({error: {msg: msg, status: status}})
})



module.exports = app