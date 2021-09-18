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