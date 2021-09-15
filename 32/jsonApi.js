const express = require('express')
const ExpressError = require('./expressError')

const app = express()
app.use(express.json())

const CANDIES = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'skittles', qty: 26, price: 0.99},
]


'/candies'



app.get('/candies', (req, res)=>{
    res.json(CANDIES)
})

app.post('/candies', (req,res)=>{
    if(req.body.name.toLowerCase() == "circus peanuts"){
        throw new ExpressError("WE HATE THOSE", 403)
    }

    CANDIES.push(req.body)
    res.status(201).json(CANDIES)
})

app.get('/secret', (req,res)=>{
    if (req.query.password != "coolbeans"){
        throw new ExpressError("Invalid Password", 403)
    }
    else{
        return res.json("You know password things!")
    }
})



app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})