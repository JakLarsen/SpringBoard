process.env.NODE_ENV === "test"

const request = require('supertest')
const app = require('../app')
const db = require('../db')



                    // SETUP 



let testInvoice;
let testCompany
beforeEach(async ()=>{
    const compResult = await db.query(
        `insert into companies (code, name, description) values ('test', 'test_company', 'a_test')
        returning code, name, description`
    )
    const invResult = await db.query(
        `insert into invoices (comp_code, amt) values ('test', '150')
        returning id, comp_code, amt, paid, add_date, paid_date`
    )
    testInvoice = invResult.rows[0]
})
afterEach(async ()=>{
    await db.query(`delete from invoices`)
})
afterAll(async ()=>{
    await db.end()
})



                    // BASIC ROUTE TESTS


                    
describe("Hope this test is working", ()=>{
    test("First test", ()=>{
        console.log(testInvoice)
        expect(1).toBe(1)
    })
})

