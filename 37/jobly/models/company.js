"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(
          `SELECT handle
           FROM companies
           WHERE handle = $1`,
        [handle]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`);

    const result = await db.query(
          `INSERT INTO companies
           (handle, name, description, num_employees, logo_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
        [
          handle,
          name,
          description,
          numEmployees,
          logoUrl,
        ],
    );
    const company = result.rows[0];

    return company;
  }

  /** Find all companies.
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   **/

  static async findAll() {
    const companiesRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           ORDER BY name`);
    return companiesRes.rows;
  }

  /** Validate filters
   * 
   * Make sure query strings requested are accepted filters
   * 
   * Return true if all filters are valid, else throw BadRequestError
   **/
  static validateFilters(filters){

    const {name, minEmployees, maxEmployees} = filters

    const OURFILTERS = new Set(["name", "minEmployees", "maxEmployees"])
    for(const [k,v] of Object.entries(filters)){
      if (!OURFILTERS.has(k)){
        // console.log(`Found a query string not in our set: ${k}`)
        throw new BadRequestError(`Query string not found: ${k}`)
      }
      //Throw an error if we try to request a higher min than max
      else if (minEmployees > maxEmployees) {
        throw new BadRequestError("Min employees cannot be greater than max");
      }
      else{
        return true
      }
    }
  }

  /** Find all companies with given filters.
   *
   * Receives an object of filters e.g. {name: 'aya'}
   * 
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   **/

  //Because the structure of the half of this comes from the solution,
  //I'm going to annotate the entire function to show understanding
  static async filterBy(filters = {}){

    //Set a base query if nothing employee-related is requested
    let query = `SELECT handle,
                        name,
                        description,
                        logo_url AS "logoUrl"
                 FROM companies`;
    let queryValues = [];
    let whereExpressions = []; 

    //If filters are valid ones found in our set, we continue
    if(this.validateFilters(filters)){

      //Deconstruct our filters so we can use their values by variable name
      const { minEmployees, maxEmployees, name } = filters;

      // For each possible search term, add to whereExpressions and queryValues so
      // we can generate the right SQL

      //If minEmployees was passed as a query string
      //We update our query to include num_employees
      //We push our minEmployees' value to our value array
      //We push our future WHERE expression to a separate array
      if (minEmployees !== undefined) {
        query = `SELECT handle,
                        name,
                        description,
                        num_employees AS "numEmployees",
                        logo_url AS "logoUrl"
                 FROM companies`;
        queryValues.push(minEmployees);
        whereExpressions.push(`num_employees >= $${queryValues.length}`);
      }
      if (maxEmployees !== undefined) {
        query = `SELECT handle,
                        name,
                        description,
                        num_employees AS "numEmployees",
                        logo_url AS "logoUrl"
                 FROM companies`;
        queryValues.push(maxEmployees);
        whereExpressions.push(`num_employees <= $${queryValues.length}`);
      }

      if (name) {
        queryValues.push(`%${name}%`);
        whereExpressions.push(`name ILIKE $${queryValues.length}`);
      }
      /**
       * If we have filters
       * We add, at the bottom of our query, for example:
       * WHERE num_employees >= $1
       * AND
       * WHERE num_employees <= $2
       * AND
       * WHERE %name% ILIKE $3
       */
      if (whereExpressions.length > 0) {
        query += " WHERE " + whereExpressions.join(" AND ");
      }
      // Finalize query and return results
      query += " ORDER BY name";
      //queryValues contains our list for serialized SQL variables
      //E.G. if /companies?name=aya&min_employees=100 was passed
      //queryValues = ['aya', 100]
      const companiesRes = await db.query(query, queryValues);
      return companiesRes.rows;
    }

  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const company = companyRes.rows[0];
    if (!company) throw new NotFoundError(`No company: ${handle}`);

    const jobsRes = await db.query(
      `SELECT j.id, j.title, j.salary, j.equity, j.company_handle
      FROM jobs AS j
      LEFT JOIN companies AS c
      ON j.company_handle = c.handle
      WHERE c.handle = $1`,
      [handle]
    )
    const jobs = jobsRes.rows
    return {company, jobs};
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    // console.log("In Company.update(handle, data)")
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          numEmployees: "num_employees",
          logoUrl: "logo_url",
        });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
          `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
        [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }
}


module.exports = Company;
