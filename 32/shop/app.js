const express = require('express')
const ExpressError = require('./expressError')
const morgan = require('morgan')
const items = require('./items')
const itemRoutes = require('./itemRoutes')

const app = express()



                    //MIDDLEWARE



app.use(express.json())
app.use(morgan('dev'))
app.use('/items', itemRoutes)


                    //HELPER ROUTES



app.get('/favicon.ico', (req,res)=>{
    res.sendStatus(204)
})



                    //MAIN ROUTES



app.get('/', (req,res)=>{
    res.send('Home Page')
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
    console.log(status)
    res.status(status).send(`ERROR: ${msg}, ${status}, ${error.stack}`)
})


module.exports = app
