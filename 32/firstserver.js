const express = require('express')

//Instantiate app
const app = express()
app.listen(5000, function(){
    console.log('App on port 5000')
})