const express = require('express')
const ExpressError = require('../expressError')
const router = new express.Router()
const db = require('../db')
const app = require('../app')



router.get('/', async(req,res,next)=>{
    try{
        const results = await db.query(
            'select * from invoices'
        )
        return res.status(200).json({invoices: results.rows})
    }
    catch(e){
        return next(e)
    }
})
router.get('/:id', async(req,res,next)=>{
    try{
        const {id} = req.params
        const results = await db.query(
            'select * from invoices where id=$1', [id]
        )
        if (results.rows.length == 0){
            throw new ExpressError('Invoice id not found.', 404)
        }
        return res.status(200).json({invoice: results.rows})
    }
    catch(e){
        return next(e)
    }
})
router.post('/', async (req, res, next)=>{
    try{
        const {comp_code, amt} = req.body
        const results = await db.query(
            `insert into invoices (comp_code, amt) values ($1, $2) 
            returning id, comp_code, amt, paid, add_date, paid_date`, [comp_code, amt]
        )
        return res.status(201).json({invoice: results.rows})
    }
    catch(e){
        return next(e)
    }
})
router.patch('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params
        const {amt} = req.body
        const results = await db.query(
            `UPDATE invoices SET amt=$2 WHERE id=$1 
            RETURNING id, comp_code, amt, paid, add_date, paid_date`, [id, amt]
        )
        if (results.rows.length == 0){
            throw new ExpressError("Invoice id not found", 404)
        }
        return res.status(200).send({invoice: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})
router.delete('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params
        const results = await db.query(
            `delete from invoices where id=$1`, [id]
        )
        return res.send({msg : "DELETED!" })
    }
    catch(e){
        return next(e)
    }
})



module.exports = router