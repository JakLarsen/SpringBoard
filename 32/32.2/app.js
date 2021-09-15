const express = require('express')
const ExpressError = require('./expressError')
const userRoutes = require('./userRoutes')

const app = express()
app.use(express.json())
app.use('/users', userRoutes)











//GENERIC 404 HANDLER
app.use((req,res,next)=>{
    const e = new ExpressError("Page not found", 404)
    next(e)
})

//ERROR HANDLER
app.use((error, req, res, next)=>{
    let status = error.status || 500
    let msg =  error.msg
    res.send(`OH NO AN ERROR: ${msg}, ${status}, ${error.stack}`)
})

//LISTENER
app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})
