const express = require('express')
const app = express()
app.use(express.json())





app.get('/', (req, res)=>{
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res)=>{
    console.log('You asked for /dogs')
    //req will have query strings and headers, lots of good data, etc
    console.log(req)
    console.log(res)
    res.send("<h1>Woof WOof</h1>")
})

app.post('/chickens', function createChicken(req, res){
    res.send("You've created a fake-new chicken")
})
app.get('/chickens', (req, res)=>{
    res.send('Bqawk bqwakw')
})

const greetings = {
    en: "hello",
    dk: "hej",
    es: "hola"
}

app.get('/greet/:language', (req,res)=>{
    const ourLang = req.params.language
    const greeting = greetings[ourLang]
    if(!greeting){
        return res.send('Invalid language')
    }
    else{
        return res.send(`${greeting}`) //return will be last called line
    }
    
})

app.get('/search', (req, res)=>{
    const {term = 'default', sort = 'default'} = req.query
    return res.send(`Search page: Term is: ${term}. Sort is: ${sort}`)
})

app.get('/show-my-headers', (req, res)=>{
    console.log(req.rawHeaders)
    console.log(req.headers)
    res.send(req.headers)
})

app.get('/show-my-langauge', (req,res)=>{
    const lang= req.headers['accept-language']
    res.send(`Your language mpreference is: ${lang}`)
})

app.post('/register', (req, res)=>{
    res.send(req.body.username);
})




app.listen(5000, ()=>{
    console.log('Listening on port LH 5000')
})



