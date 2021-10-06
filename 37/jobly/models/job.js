"use strict";

const { query } = require("express");
const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for jobs. */

class Job {

  /** Create a Job (from data), update db, return new Job data.
   * 
   * Data should be { title, salary, equity, company_handle }
   * Returns { title, salary, equity, company_handle }
   * */

    static async create({title, salary, equity, company_handle}){
        
        const results = await db.query(
            `INSERT INTO jobs
            (title, salary, equity, company_handle)
            VALUES ($1, $2, $3, $4)
            RETURNING title, salary, equity, company_handle`,
            [title, salary, equity, company_handle]
        )
        const job = results.rows[0]
        return job;
    }

    static async findAll(){

        const results = await db.query(
            `SELECT title, salary, equity, company_handle
            FROM jobs
            ORDER BY title`
        )
        return results.rows
    }

    /** Validate filters - should be in helpers eventually not in company and job separately
     * 
     * Make sure query strings requested are accepted filters
     * Return true if all filters are valid, else throw BadRequestError
     **/

    static validateFilters(filters){

        const {title, minSalary, hasEquity} = filters
        const OURFILTERS = new Set(['title','minSalary','hasEquity'])

        for(const[k,v] of Object.entries(filters)){
            if (!OURFILTERS.has(k)){
                // console.log(`Found a query string not in our set: ${k}`)
                throw new BadRequestError(`Query string not found: ${k}`)
            }
            else{
                return true
            }
        }
    }

    /** Find all Jobs with given filters
     * 
     * Receives an object of filters e.g. {title: 'Software'}
     * Returns a list of Jobs matching filters [{title,salary,equity,company_handle}]
     */

    static async filterBy(filters = {}){
        
        // console.log('In Job.filterBy')
        //BASE QUERY
        let baseQuery = 
        `SELECT title, salary, equity, company_handle
        FROM jobs`

        let queryValues = []
        let whereExpressions = []

        //IF FILTERS VALIDATED
        if(this.validateFilters(filters)){
            const {title, minSalary, hasEquity} = filters

            if(title){
                queryValues.push(`%${title}%`)
                whereExpressions.push(`title ILIKE $${queryValues.length} `)
            }
            if(minSalary){
                queryValues.push(minSalary)
                whereExpressions.push(`salary > $${queryValues.length}`)
            }
            if(hasEquity){
                queryValues.push(0)
                if (hasEquity.toLowerCase() === 'true'){
                    whereExpressions.push(`equity > $${queryValues.length} `)
                }
                else{
                    whereExpressions.push(`equity = $${queryValues.length} `)
                }
            }
            if (whereExpressions.length > 0) {
                baseQuery += " WHERE " + whereExpressions.join(" AND ");
            }
            baseQuery += 'ORDER BY title'
            // console.log(baseQuery, queryValues)
        }
        const jobRes = await db.query(baseQuery, queryValues)
        // console.log(jobRes)
        return jobRes.rows
    }





















    

//   /** Given a company handle, return data about company.
//    *
//    * Returns { handle, name, description, numEmployees, logoUrl, jobs }
//    *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
//    *
//    * Throws NotFoundError if not found.
//    **/

//   static async get(handle) {
//     const companyRes = await db.query(
//           `SELECT handle,
//                   name,
//                   description,
//                   num_employees AS "numEmployees",
//                   logo_url AS "logoUrl"
//            FROM companies
//            WHERE handle = $1`,
//         [handle]);

//     const company = companyRes.rows[0];

//     if (!company) throw new NotFoundError(`No company: ${handle}`);

//     return company;
//   }

//   /** Update company data with `data`.
//    *
//    * This is a "partial update" --- it's fine if data doesn't contain all the
//    * fields; this only changes provided ones.
//    *
//    * Data can include: {name, description, numEmployees, logoUrl}
//    *
//    * Returns {handle, name, description, numEmployees, logoUrl}
//    *
//    * Throws NotFoundError if not found.
//    */

//   static async update(handle, data) {
//     // console.log("In Company.update(handle, data)")
//     const { setCols, values } = sqlForPartialUpdate(
//         data,
//         {
//           numEmployees: "num_employees",
//           logoUrl: "logo_url",
//         });
//     const handleVarIdx = "$" + (values.length + 1);

//     const querySql = `UPDATE companies 
//                       SET ${setCols} 
//                       WHERE handle = ${handleVarIdx} 
//                       RETURNING handle, 
//                                 name, 
//                                 description, 
//                                 num_employees AS "numEmployees", 
//                                 logo_url AS "logoUrl"`;
//     const result = await db.query(querySql, [...values, handle]);
//     const company = result.rows[0];

//     if (!company) throw new NotFoundError(`No company: ${handle}`);

//     return company;
//   }

//   /** Delete given company from database; returns undefined.
//    *
//    * Throws NotFoundError if company not found.
//    **/

//   static async remove(handle) {
//     const result = await db.query(
//           `DELETE
//            FROM companies
//            WHERE handle = $1
//            RETURNING handle`,
//         [handle]);
//     const company = result.rows[0];

//     if (!company) throw new NotFoundError(`No company: ${handle}`);
//   }


}


module.exports = Job;
