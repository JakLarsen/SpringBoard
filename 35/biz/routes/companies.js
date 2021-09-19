const express = require('express')
const ExpressError = require('../expressError')
const router = new express.Router()
const db = require('../db')
const app = require('../app')
const slugify = require('slugify')
const Company = require('../models/companies')
const Ccompany = require('../models/companies2')




router.get('/', async function(req,res,next){
    try{
        const results = await Ccompany.getAll()
        return res.json(results)
    }
    catch(e){
        return next(e)
    }
})

router.get('/:code', async function(req, res, next){
    const {code} = req.params
    try{
        const results = await Ccompany.getByCode(code)
        return res.json({company: results})
    }
    catch(e){
        return next(e)
    } 
})

router.post('/', async (req, res, next)=>{
    try{
        const results = await Ccompany.create(req)
        return res.status(201).json({company: results})
    }
    catch(e){
        return next(e)
    }
})

router.patch('/:code', async (req,res,next)=>{
    try{
        const {code} = req.params
        const {name, description} = req.body

        let ourCompany = await Ccompany.getByCode(code)
        ourCompany.name = name
        ourCompany.description = description
        await ourCompany.save()

        return res.status(200).send({company: ourCompany})
    }
    catch(e){
        return next(e)
    }
})

router.delete('/:code', async (req,res,next)=>{
    try{
        const {code} = req.params
        let companyToDelete = await Ccompany.getByCode(code)
        await companyToDelete.remove()
        
        return res.send({msg : `DELETED`})
        }
    catch(e){
        return next(e)
    }
})






module.exports = router