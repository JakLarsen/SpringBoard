process.env.NODE_ENV

const request = require('supertest')
const app = require('./app')
let users = require('./users')

let user5 = {id: 5, username: "Jim"}
beforeEach(()=>{
    users.USERS.push(user5)
})
afterEach(()=>{
    users.USERS.length = 4
})

describe("GET /users", () =>{
    test("Get all users", async ()=>{
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200)
    })
})
describe("GET /users/:id", () =>{
    test("Get user by id", async ()=>{
        const res = await request(app).get('/users/1')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({user: {id: 1, username: "Birdy"}})
    })
    test("Responds with 404 for invalid user", async ()=>{
        const res = await request(app).get('/users/boop')
        expect(res.statusCode).toBe(404)
    })
})
describe("POST /users", () =>{
    test("Create a user", async ()=>{
        const res = await request(app).post('/users').send({id: 6, username: "Mike"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({newUser: {id: 6, username: "Mike"}})
    })
})
// describe("DELETE /users/:username", ()=>{
//     test ("Deleting a user", async () =>{
//         const res = await request(app).delete(`/users/${user5.username}`)
//         expect(res.statusCode).toBe(200)
//     })
//     test ("Responds with 404 for deleting invalid user", async () =>{
//         const res = await request(app).delete(`/users/popsicle`)
//         expect(res.statusCode).toBe(404)
//     })
// })