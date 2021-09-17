const express = require('express')
const router = new express.Router()
const ExpressError = require("../expressError")
const db = require('../db')
const app = require('../app')





router.get('/', async (req,res, next) =>{
    try{
        const results = await db.query(`select * from users`)
        return res.json({users: results.rows})
    }
    catch(e){
        return next(e)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const {name, type} = req.body
        const results = await db.query(
            'insert into users (name, type) values ($1, $2) returning id, name, type', [name, type]
            )
            return res.status(201).json({user: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})

router.get('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params
        const results = await db.query(
            `select * from users where id=$1`, [id]
        )
        if (results.rows.length == 0){
            throw new ExpressError("User not found", 404)
        }
        return res.status(200).send({user: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})

router.patch('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params
        const {name, type} = req.body
        const results = await db.query(
            `UPDATE users SET name=$1, type=$2 WHERE id=$3 RETURNING id, name, type`, [name, type, id]
        )
        if (results.rows.length == 0){
            throw new ExpressError("User not found", 404)
        }
        return res.status(200).send({user: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params
        const results = await db.query(
            `delete from users where id=$1`, [id]
        )
        return res.send({msg : "DELETED!" })
    }
    catch(e){
        return next(e)
    }
})

// router.get('/search', async (req,res,next)=>{
//     try{
//         const type = req.query.type
//         const results = await db.query(`select * from users where type=$1`, [type])
//         return res.json(results.rows)
//     }
//     catch(e){
//         return next(e)
//     }
// })










module.exports = router