const db = require("../db");
const ExpressError = require('../expressError')
const slugify = require('slugify')




class Company{

    static async getAll(){
        let results = await db.query(
            `SELECT code, name, description 
            FROM companies`
            )
        return results.rows
    }

    static async getByCode(code){
        const results = await db.query(
            `SELECT c.code, c.name, c.description, i.code
            FROM companies as c
            LEFT JOIN companies_industries as ci
            ON c.code = ci.company_code
            LEFT JOIN industries AS i ON ci.industry_code = i.code
            WHERE c.code=$1`, 
            [code] 
        )
        if (results.rows.length == 0){
            throw new ExpressError('Company code not found.', 404)
        }
        const {name, description} = results.rows[0]
        let industries = results.rows.map(r=> r.code)
        let ourCompany = {code: code, name: name, description: description, industries: industries}
        console.log(ourCompany)
        return ourCompany
    }

    static async create(req){
        try{       
            if(req.body.name == undefined || req.body.description == undefined){
                throw new ExpressError("Name or Description not defined", 400)
            }
            const {name, description} = req.body
            let code = slugify(name).toLowerCase()
            const results = await db.query(
                `INSERT INTO companies (code, name, description) 
                VALUES ($1, $2, $3) 
                RETURNING code, name, description`, 
                [code, name, description]
            )
            return results.rows[0]
        }
        catch(e){
            return next(e)
        }
        
    }

    static async delete(code){
        try{
            const results = await db.query(
                `DELETE FROM companies 
                WHERE code=$1`, 
                [code] 
            )
            return "DELETED!"
        }
        catch(e){
            return next(e)
        }
    }
}



module.exports = Company