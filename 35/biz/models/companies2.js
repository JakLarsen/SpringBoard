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
            let ourCompany = new Ccompany (code, name, description, industries)
            return ourCompany
        }
        catch(e){
            return next(e)
        }
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
            let ourCompany = new Ccompany (code, name, description)
            return ourCompany
        }
        catch(e){
            return next(e)
        }
        
    }

    async remove(){
        await db.query(
            `DELETE FROM companies
            WHERE code=$1`,
            [this.code]
        )
    }

    async save(){
        await db.query(
            `UPDATE companies
            SET name=$2, description=$3
            WHERE code=$1`, 
            [this.code, this.name, this.description]
        )  
    }




}



module.exports = Ccompany