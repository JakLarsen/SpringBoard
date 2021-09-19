const express = require('express')
const router = new express.Router()
const users = require('./users')



router.get('/', function (req,res){
    res.json({users: users.USERS})
})
router.post('/', function (req,res){
    let newUser = {id: req.body.id, username: req.body.username}
    users.USERS.push(newUser)
    res.status(201).json({newUser: newUser})
})
router.get('/:id', function (req,res){
    const user = users.USERS.find(u=>u.id === +req.params.id)
    res.json({user})
})


module.exports = router