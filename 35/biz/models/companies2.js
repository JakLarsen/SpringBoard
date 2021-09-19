const db = require("../db");
const ExpressError = require('../expressError')
const slugify = require('slugify')


class Ccompany{
    constructor(code,name,description, industries = []){
        this.code = code
        this.name = name
        this.description = description
        this.industries = industries
    }

    static async getAll(){
        try{
           const results = await db.query(
                `SELECT code,name,description
                FROM companies`
            )
            const companies = results.rows.map(r => new Ccompany(r.code, r.name, r.description) )
            return companies 
        }
        catch(e){
            return next(e)
        }
    }

    static async getByCode(code){
        try{
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
            let ourCompany2 = new Ccompany (code, name, description, industries)
            return ourCompany2
        }
        catch(e){
            return next(e)
        }
    }
}



module.exports = Ccompany