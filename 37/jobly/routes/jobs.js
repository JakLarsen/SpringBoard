"use strict";

/** Routes for Jobs. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureLoggedIn, ensureIsAdmin, ensureIsAdminOrUser } = require("../middleware/auth");
const Job = require("../models/job");

const jobNewSchema = require("../schemas/jobNew.json");
const jobUpdateSchema = require("../schemas/jobUpdate.json");
const db = require("../db");

const router = new express.Router();



/**POST '/jobs' { job } => {job} 
 * 
 * Job should be {title, salary, equity, company_handle}
 * Returns {title, salary, equity, company_handle}
 * 
 * Authorization required: Login
*/
// ensureLoggedIn, ensureIsAdmin,
router.post("/", async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body, jobNewSchema);
        if (!validator.valid){
            const errs = validator.errors.map(e => e.stack)
            throw new BadRequestError(errs)
        }
        const job = await Job.create(req.body);
        return res.status(201).json({job})
    }
    catch(e){
        return next(e)
    }
})

/**
 * GET '/jobs'
 * 
 * Can filter on provided search filters: title, minSalary, hasEquity
 * Returns {jobs: [{title, salary, equity, company_handle}]}
 * 
 * Authorization required: None
 */
router.get('/', async function (req,res,next){
    try{
        let filters = req.query
        let jobs = {}
        //IF QUERY STRINGS CONTAIN PARAMETERS, FILTER
        if(Object.keys(filters).length !==0){
            jobs = await Job.filterBy(filters)
        }
        else{
            jobs = await Job.findAll()
        }
        return res.status(200).json({ jobs })
    }
    catch(e){
        return next(e)
    }
});

/**
 * GET '/jobs/id'
 * 
 * Get a job by id
 * Returns {id, title, salary, equity, company_handle}
 * 
 * Authorization: None
 */
 router.get("/:id", async function (req, res, next) {
    try {
      console.log('in Jobs /jobs/id')
      const job = await Job.get(req.params.id);
      return res.json({ job });
    } 
    catch (err) {
      return next(err);
    }
});



/**
 * PATCH '/jobs/id
 * 
 * fields can be: {title, salary, equity}
 * Returns {id, title, salary, equity, company_handle}
 * 
 * Authorization required: Login, Admin
 */
// ensureLoggedIn, ensureIsAdmin,
router.patch('/:id', async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body, jobUpdateSchema)
        if (!validator.valid){
            const errs = validator.errors.map(e => e.stack)
            throw new BadRequestError(errs)
        }
        const job = await Job.update(req.params.id, req.body)
        return res.status(200).json({job})
    }
    catch(e){
        return next(e)
    }
})








// /** DELETE /[handle]  =>  { deleted: handle }
//  *
//  * Authorization: login
//  */
// // ensureLoggedIn, ensureIsAdmin,
// router.delete("/:handle", ensureLoggedIn, async function (req, res, next) {
//   try {
//     await Company.remove(req.params.handle);
//     return res.json({ deleted: req.params.handle });
//   } catch (err) {
//     return next(err);
//   }
// });


module.exports = router;