"use strict";

/** Routes for Jobs. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureLoggedIn, ensureIsAdmin, ensureIsAdminOrUser } = require("../middleware/auth");
const Job = require("../models/job");

const jobNewSchema = require("../schemas/jobNew.json");
const jobUpdateSchema = require("../schemas/jobUpdate.json");

const router = new express.Router();


// router.get("/", async function(req,res,next){
//     res.json('You hit the jobs route!')
// })



/**POST / { job } => {job} 
 * 
 * job should be {title, salar, equity, company_handle}
 * 
 * Returns {title, salary, equity, company_handle}
 * 
 * Authorization required: login
*/

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




















// /** GET /  =>
//  *   { companies: [ { handle, name, description, numEmployees, logoUrl }, ...] }
//  *
//  * Can filter on provided search filters:
//  * - minEmployees
//  * - maxEmployees
//  * - nameLike (will find case-insensitive, partial matches)
//  *
//  * Authorization required: none
//  */

// router.get("/", async function (req, res, next) {
//   try {
//     //If query strings contain a parameter, filter
//     let filters = req.query
//     console.log(filters)
//     let companies = {}

//     if(Object.keys(filters).length !== 0){
//       companies = await Company.filterBy(filters)
//     }
//     else{
//       companies = await Company.findAll();
//     }
//     return res.json({ companies });
//   } catch (err) {
//     return next(err);
//   }
// });

// /** GET /[handle]  =>  { company }
//  *
//  *  Company is { handle, name, description, numEmployees, logoUrl, jobs }
//  *   where jobs is [{ id, title, salary, equity }, ...]
//  *
//  * Authorization required: none
//  */

// router.get("/:handle", async function (req, res, next) {
//   try {
//     const company = await Company.get(req.params.handle);
//     return res.json({ company });
//   } catch (err) {
//     return next(err);
//   }
// });

// /** PATCH /[handle] { fld1, fld2, ... } => { company }
//  *
//  * Patches company data.
//  *
//  * fields can be: { name, description, numEmployees, logo_url }
//  *
//  * Returns { handle, name, description, numEmployees, logo_url }
//  *
//  * Authorization required: login
//  */

// // ensureLoggedIn, ensureIsAdmin,
// router.patch("/:handle", async function (req, res, next) {
//   try {
//     const validator = jsonschema.validate(req.body, companyUpdateSchema);
//     if (!validator.valid) {
//       const errs = validator.errors.map(e => e.stack);
//       throw new BadRequestError(errs);
//     }

//     const company = await Company.update(req.params.handle, req.body);
//     return res.json({ company });
//   } catch (err) {
//     return next(err);
//   }
// });

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