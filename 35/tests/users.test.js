process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('../app')
const db = require('../db')


let testUser;
beforeEach(async () =>{
    const result = await db.query(
        `insert into users (name,type) values('peanut', 'admin')
        returning id, name, type`
    )
    testUser = result.rows[0]
})
afterEach(async ()=>{
    await db.query(`delete from users`)
})
afterAll(async ()=>{
    await db.end()
})

describe("Hope this test is working", ()=>{
    test("First test", ()=>{
        console.log(testUser)
        expect(1).toBe(1)
    })
})

describe("GET /users", function(){
    test("Get list of users", async function(){
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({users: [testUser]})
    })
})
describe("POST /users", function(){
    test("Create a User", async function(){
        let newUser = {name: 'Jake', type:'admin'}
        const res = await request(app).post('/users').send(newUser)
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({
            user: {
                id: expect.any(Number),
                name: 'Jake',
                type: 'admin'
            }
        })
    })
})
describe("GET /users/:id", function(){
    test("Get a single user", async function(){
        const res = await request(app).get(`/users/${testUser.id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({user: testUser})
    })
    test("Responds with 404 for invalid id", async function(){
        const res = await request(app).get(`/users/0`)
        expect(res.statusCode).toBe(404)
    })
})
describe("PATCH /users/:id", function(){
    test("Change a user's name", async function(){
        let newInfo = {name: "000", type: "user"}
        const res = await request(app).patch(`/users/${testUser.id}`).send(newInfo)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
            user: {
                id: expect.any(Number),
                name: '000',
                type: 'user'
            }
        })
    })
    test("Responds with 404 for invalid id", async function(){
        const res = await request(app).patch(`/users/0`)
        expect(res.statusCode).toBe(404)
    })
})
describe("DELETE /users/:id", function(){
    test("Delete a user", async function(){
        const res = await request(app).delete(`/users/${testUser.id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ msg : "DELETED!" })
    })
})