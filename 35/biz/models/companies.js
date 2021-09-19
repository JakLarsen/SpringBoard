const db = require("../db");
const ExpressError = require('../expressError')




class Company{

    static async getAll(){
        let result = await db.query(
            "SELECT code, name, description FROM companies"
            )
        return result
    }
    static async getByCode(code){
        const result = await db.query(
            `SELECT c.code, c.name, c.description, i.code
                FROM companies as c
                    LEFT JOIN companies_industries as ci
                        ON c.code = ci.company_code
                    LEFT JOIN industries AS i ON ci.industry_code = i.code
                WHERE c.code=$1`, [code] 
        )
        if (result.rows.length == 0){
            throw new ExpressError('Company code not found.', 404)
        }
        const {name, description} = result.rows[0]
        let industries = result.rows.map(r=> r.code)
        let ourCompany = {code: code, name: name, description: description, industries: industries}
        console.log(ourCompany)
        return ourCompany
    }

}

module.exports = Company