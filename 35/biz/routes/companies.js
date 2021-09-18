const express = require('express')
const ExpressError = require('../expressError')
const router = new express.Router()
const db = require('../db')
const app = require('../app')
const slugify = require('slugify')



router.get('/', async function(req, res, next){
    try{
        const results = await db.query(
                'select * from companies'
            )
        return res.status(200).json({companies: results.rows})
    }
    catch(e){
        return next(e)
    } 
})
router.get('/:code', async function(req, res, next){
    const {code} = req.params
    try{
        const results = await db.query(
                'select * from companies where code=$1', [code]
            )
        if (results.rows.length == 0){
            throw new ExpressError('Company code not found.', 404)
        }
        return res.status(200).json({company: results.rows[0]})
    }
    catch(e){
        return next(e)
    } 
})
router.post('/', async (req, res, next)=>{
    const {name, description} = req.body
    let slugcode = slugify(name).toLowerCase()
    try{
        const results = await db.query(
            `insert into companies (code, name, description) values ($1, $2, $3) 
            returning code, name, description`, [slugcode, name, description]
        )
        return res.status(201).json({company: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})
router.patch('/:code', async (req,res,next)=>{
    try{
        const {code} = req.params
        const {name, description} = req.body
        const results = await db.query(
            `UPDATE companies SET name=$2, description=$3 WHERE code=$1 RETURNING code, name, description`, [code, name, description ]
        )
        if (results.rows.length == 0){
            throw new ExpressError("Company code not found", 404)
        }
        return res.status(200).send({company: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})
router.delete('/:code', async (req,res,next)=>{
    try{
        const {code} = req.params
        const results = await db.query(
            `delete from companies where code=$1`, [code]
        )
        return res.send({msg : "DELETED!" })
        }
    catch(e){
        return next(e)
    }
})



module.exports = router