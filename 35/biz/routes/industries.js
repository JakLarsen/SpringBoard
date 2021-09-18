const express = require('express')
const ExpressError = require('../expressError')
const router = new express.Router()
const db = require('../db')
const app = require('../app')
const { copyDone } = require('pg-protocol/dist/messages')



router.get('/', async function(req, res, next){
    try{
        //I need a query that only returns unique industry.code, then display companies within
        const results = await db.query(
                `SELECT * FROM industries AS i
                    LEFT JOIN companies_industries as ci
                        ON i.code = ci.industry_code
                    LEFT JOIN companies AS c ON ci.company_code = c.code`
            )
        return res.status(200).json({industries: results.rows})
    }
    catch(e){
        return next(e)
    } 
})
router.post('/', async (req, res, next)=>{
    const {code, field} = req.body
    try{
        const results = await db.query(
            `INSERT INTO industries (code, field) VALUES ($1, $2) 
            RETURNING code, field`, [code, field]
        )
        return res.status(201).json({industry: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})
router.post('/add-company', async (req, res, next)=>{
    const {industry_code, company_code} = req.body
    try{
        const results = await db.query(
            `INSERT INTO companies_industries (industry_code, company_code) VALUES ($1, $2) 
            RETURNING industry_code, company_code`, [industry_code, company_code]
        )
        return res.status(201).json({company_industry: results.rows[0]})
    }
    catch(e){
        return next(e)
    }
})










module.exports = router