process.env.NODE_ENV === "test"

const request = require('supertest')
const app = require('../app')
const db = require('../db')



                    // SETUP 



let testCompany;
beforeEach(async ()=>{
    const result = await db.query(
        `insert into companies (code, name, description) values ('test', 'test_company', 'a_test')
        returning code, name, description`
    )
    testCompany = result.rows[0]
})
afterEach(async ()=>{
    await db.query(`delete from companies`)
})
afterAll(async ()=>{
    await db.end()
})



                    // BASIC ROUTE TESTS



describe("Hope this test is working", ()=>{
    test("First test", ()=>{
        console.log(testCompany)
        expect(1).toBe(1)
    })
})
describe("GET /companies", function(){
    test("Get list of users", async function(){
        const res = await request(app).get('/companies')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({companies: [testCompany]})
    })
})
describe("POST /companies", function(){
    test("Add a new company", async function(){
        const newComp = {code: "test3", name: "test_comp3", description: "a_test3"}
        const res = await request(app).post('/companies').send(newComp)
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({company: newComp})
    })
})
describe ("GET /companies/:code", function(){
    test("Get a company by code", async function(){
        const res = await request(app).get(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({company: testCompany})
    })
    test("Expect 404 if company code doesn't exist", async function(){
        const res = await request(app).get(`/companies/1700zebras`)
        expect(res.statusCode).toBe(404)
    })
})
describe("PATCH /companies/:code", function(){
    test("Update a company by code", async function(){
        const newInfo = {name:"test_puppies", description:"a_test"}
        const res = await request(app).patch(`/companies/${testCompany.code}`).send(newInfo)
        expect(res.statusCode).toBe(200)
    })
})
describe("DELETE /companies/:code", function(){
    test("Delete a company by code", async function(){
        const res = await request(app).delete(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ msg : "DELETED!" })
    })
})
