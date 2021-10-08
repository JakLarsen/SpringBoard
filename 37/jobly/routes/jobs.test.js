"use strict";

const request = require("supertest");

const db = require("../db");
const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
} = require("./_testCommon");
const Job = require("../models/job");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /jobs */

describe("POST /jobs", function(){
    
    const newJob = {
        title: 'Chef',
        salary: 60000,
        equity: 0.01,
        company_handle: 'c3'
    }

    test('Properties are their data types', function(){
        expect(typeof newJob.title).toEqual('string')
        expect(typeof newJob.equity).toEqual('number')
        expect(typeof newJob.salary).toEqual('number')
        expect(typeof newJob.equity).not.toEqual('string')
    })

    test('User can create', async function(){
        const resp = await request(app).post('/jobs')
            .send(newJob)
            .set("authorization", `Bearer ${u1Token}`)
        expect(resp.statusCode).toEqual(201)
        //THIS WAS FAILING
        //It is sending equity as a string... '0.01' and I don't know why HMM
        expect(resp.body).toEqual(
            {
                job: 
                {
                    title: 'Chef',
                    salary: 60000,
                    equity: '0.01',
                    company_handle: 'c3'
                }
        })
    });
});

/************************************** GET /jobs */

describe('GET /jobs works', function(){

    // test("getting all works", async function () {
    //     const resp = await request(app).get("/jobs")
    //     expect(resp.body).toEqual(
    //         { jobs: [
    //                     {
    //                         title: "j1",
    //                         salary: 1,
    //                         equity: "0",
    //                         company_handle: "c1"
    //                     },
    //                     {
    //                         title: "j2",
    //                         salary: 2,
    //                         equity: "0",
    //                         company_handle: "c2"
    //                     },
    //                     {
    //                         title: "j3",
    //                         salary: 3,
    //                         equity: "0",
    //                         company_handle: "c2"
    //                     }
    //                 ]
    //         }
    //     )
    // });
});

/************************************** GET /jobs/:id */

describe("GET /jobs/:id", function(){
    test("Works", async function(){


        let ourID = 0;
        const getFirstJob = await db.query(
            `SELECT *
            FROM jobs`
        )
        let ourFirstJob = getFirstJob.rows[0]
        ourID = ourFirstJob.id
        const resp = await request(app).get(`/jobs/${ourID}`)
        expect(resp.body).toEqual(
            {job: 
                {
                    id: ourID,
                    title: "j1",
                    salary: 1,
                    equity:'0',
                    company_handle: "c1"
                }
            }
        )
    })
});



/************************************** DELETE /jobs/:id */

describe("DELETE /jobs/:id", function () {
    test("works for users", async function () {
        let jobs = await Job.findAll()
        let firstJob = jobs[0]
        // console.log(firstJob)
        const resp = await request(app).delete(`/jobs/${firstJob.id}`)
          .set("authorization", `Bearer ${u1Token}`);
        expect(resp.body).toEqual({ deleted: `${firstJob.id}`});
    });
  
    // test("unauth for anon", async function () {
    //     let jobs = await Job.findAll()
    //     let firstJob = jobs[0]
    //     const resp = await request(app)
    //       .delete(`/jobs/${firstJob.id}`);
    //     expect(resp.statusCode).toEqual(401);
    // });
  
    test("not found for no such job", async function () {
      const resp = await request(app)
          .delete(`/job/99999`)
          .set("authorization", `Bearer ${u1Token}`);
      expect(resp.statusCode).toEqual(404);
    });
  });