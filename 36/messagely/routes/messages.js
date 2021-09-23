                    
                    
                    
                    // MESSAGES ROUTES 



const express = require('express');
const { ensureLoggedIn, ensureToOrFromUser, ensureToUser } = require('../middleware/auth');
const router = new express.Router();
const Message = require('../models/message')




router.get('/', async(req,res,next)=>[
    res.json('You hit the messages endpoint')
])

//GET MESSAGE INFO BY ID
//-ONLY TO AND FROM USERS CAN ACCESS MESSAGE
router.get('/:id', ensureLoggedIn, async function (req,res,next){
    try{
        const {id} = req.params
        const messageInfo = await Message.get(id)
        const toUser = messageInfo.to_user.username
        const fromUser = messageInfo.from_user.username
        ensureToOrFromUser(req, toUser, fromUser)
        return res.json({message: messageInfo}) 
    }
    catch(e){
        return next(e)
    }
})


//POST MESSAGE FROM USER TO USER
router.post('/', ensureLoggedIn, async(req,res,next)=>{
    try{
        const {to_username, body} = req.body
        const from_username = req.user.username
        const message = await Message.create({from_username, to_username, body})
        res.json(`Message for: ${to_username} from: ${req.user.username}. ${message.body}`)  
    }
    catch(e){
        next(e)
    } 
})

//MAKR MESSAGE AS READ
//ONLY toUSER CAN ACCESS
router.post('/:id/read', ensureLoggedIn, async function (req,res,next){
    try{
        const {id} = req.params
        const messageInfo = await Message.get(id)
        const toUser = messageInfo.to_user.username
        ensureToUser(req, toUser)
        const updateRead = await Message.markRead(id)
        return res.json({message: updateRead}) 
    }
    catch(e){
        return next(e)
    }
})



module.exports = router

