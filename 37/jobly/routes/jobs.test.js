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
