const express = require('express')
const router = new express.Router()

const USERS = [
    {id: 1, username: "Birdy"},
    {id: 2, username: "Bill"}
]


router.get('/', (req,res)=>{
    res.json({users: USERS})
})
router.get('/:id', (req,res)=>{
    const user = USERS.find(u=>u.id === +req.params.id)
    res.json({user})
})


module.exports = router