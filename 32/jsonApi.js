const express = require('express')
const ExpressError = require('./expressError')

const app = express()
app.use(express.json())

const CANDIES = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'skittles', qty: 26, price: 0.99},
]


'/candies'


//Will run every time server is pinged for something
app.use((req, res, next)=>{
    console.log("Server Request")
    next()
})

app.get('/candies', (req, res)=>{
    res.json(CANDIES)
})

app.post('/candies', (req,res, next)=>{
    try{
        if(req.body.name.toLowerCase() == "circus peanuts"){
            throw new ExpressError("WE HATE THOSE", 403)
        
        }
        CANDIES.push(req.body)
        res.status(201).json(CANDIES)
    }
    catch (e){
        next(e)
    }
    
})

app.get('/secret', (req,res,next)=>{
    try{
        if (req.query.password != "coolbeans"){
            throw new ExpressError("Invalid Password", 403)
        }
        else{
            return res.json("You know password things!")
        }
    }
    catch(e){
        next(e)
    }

})

//If nothing else runs, generic 404
app.use((req,res,next)=>{
    const e = new ExpressError("Page not found", 404)
    next(e)
})

//Otherwise we use an error handler
app.use((error, req, res, next)=>{
    let status = error.status || 500
    let msg =  error.msg
    res.send(`OH NO AN ERROR: ${msg}, ${status}, ${error.stack}`)
})

app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})