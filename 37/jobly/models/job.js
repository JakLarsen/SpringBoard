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
            `SELECT id, title, salary, equity, company_handle
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

    /**
     * Get a job by id
     * 
     * Returns {id, title, salary, equity, company_handle}
     */
    static async get(id){
        // console.log('In Job.get/id')
        const results = await db.query(
            `SELECT id, title, salary, equity, company_handle
            FROM jobs
            WHERE id = $1`,
            [id]
        )
        // console.log(results)
        const job = results.rows[0]
        if (!job) throw new NotFoundError(`Id doesn't exist: ${id}`);

        return job;
    }


    /**
     * Update Job data with `data`
     * 
     * This is a partial update: data can include {title, salary, equity, company_handle}
     * Returns {id, salary, equity, company_handle}
     */

    static async update(id, data){
        const {setCols, values} = sqlForPartialUpdate(
            data,
            {
                companyHandle: "company_handle"
            }
        )
        const handleVarIdx = "$" + (values.length + 1);
        const querySql = `UPDATE jobs
                      SET ${setCols} 
                      WHERE id = ${handleVarIdx} 
                      RETURNING id, 
                        title,
                        salary, 
                        equity, 
                        company_handle AS "companyHandle"`;
        const result = await db.query(querySql, [...values, id]);
        const job = result.rows[0];

        if (!job) throw new NotFoundError(`No job with ID: ${id}`);

        return job;
    }

    /**
     * DELETE given job by id
     */
    static async remove(id){

        const result = await db.query(
            `DELETE
            FROM jobs
            WHERE id = $1
            RETURNING id`,
            [id]
        )
        const job = result.rows[0]
        if(!job) throw new NotFoundError(`No job with id: ${id}`) 
    }

}




module.exports = Job;
