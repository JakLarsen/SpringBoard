const express = require('express')
const ExpressError = require('./expressError')
const middleware = require('./middleware.js')
const userRoutes = require('./userRoutes')
const morgan = require('morgan')

const app = express()



                    //MIDDLEWARE



app.use(express.json())
app.use(morgan('dev'))
app.use('/users', userRoutes)



                    //HELPER ROUTES



app.get('/favicon.ico', (req,res)=>{
    res.sendStatus(204)
})



                    //MAIN ROUTES



app.get('/secret', middleware.checkForPassword, (req, res, next)=>{
    return res.send("Cool secretttttt")
})
app.get('/private', middleware.checkForPassword, (req, res, next)=>{
    return res.send("Cool ZONE")
})



                    //GENERICS



//GENERIC 404 HANDLER
app.use((req,res,next)=>{
    const e = new ExpressError("Page not found", 404)
    next(e)
})

//ERROR HANDLER
app.use((error, req, res, next)=>{
    let status = error.status || 500
    let msg =  error.msg
    res.send(`ERROR: ${msg}, ${status}, ${error.stack}`)
})


module.exports = app
