"use strict";

const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Job = require("./job.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
    const newJob = 
    {
        title: "new",
        salary: 100000,
        // equity: 0,
        company_handle: "c1"
    }
  
    test("works", async function () {
        let job = await Job.create(newJob);
        console.log(job)
        expect(job).toEqual(
            {
                title: "new",
                salary: 100000,
                equity: null,
                company_handle: "c1"
            }
        )
  
      const result = await db.query(
            `SELECT title, salary, equity, company_handle
             FROM jobs
             WHERE title = 'new'`);
      expect(result.rows).toEqual([
        {
            title: "new",
            salary: 100000,
            equity: null,
            company_handle: "c1"
        },
      ])
    });
});

/************************************** validateFilters() */

describe("validateFilters()", function(){
    test("returns true if passed one filter in accepted set", function(){
      let results = Job.validateFilters({title: 'c1'})
      expect(results).toBeTruthy()
    });
  
    test("returns true if passed all 3 filters in set", function(){
      let results = Job.validateFilters({title: 'c1', minSalary: 1, hasEquity: 'true'})
      expect(results).toBeTruthy()
    });

    //Could do some hasEquity and minSalary tests, but not necessary right now
});