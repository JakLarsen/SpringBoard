process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("./app");
let items = require("./items");



let banana = {name: "banana", price: "1.50"}
beforeEach(function() {
    items.push(banana);
});
afterEach(function() {
    items.length = 0;
});

//GET '/items'
describe('GET /items', function(){
    test('Get a list of your items', async function(){
        let res = await request(app).get('/items')
        expect(res.status).toBe(200)
        expect(res.body).toEqual({items: [banana]})
    })
})
//POST '/items'
describe('POST /items', function(){
    test('Add an item to your list', async function(){
        let res = await request(app).post('/items').send({
            name: banana.name,
            price: banana.price
        })
        expect(res.status).toBe(201)
    })
})
//GET '/items/:name'
describe('GET /items/:name', function(){
    test('Get an item from your list', async function(){
        let res = await request(app).get(`/items/${banana.name}`)
        expect(res.status).toBe(200)
    })
    test("404 on missing item", async function() {
        const res = await request(app).get(`/items/0`);
        expect(res.statusCode).toBe(404);
    })
})
//PATCH '/items/:name'
describe('PATCH /items/:name', function(){
    test('Get an item from your list', async function(){
        let res = await request(app).patch(`/items/${banana.name}`).send({
            name: "Banan"
        })
        expect(res.status).toBe(200)
    })
    test("404 on missing item", async function() {
        const res = await request(app).patch(`/items/1`);
        expect(res.statusCode).toBe(404);
    })
})
//DELETE '/items/:name'
describe('DELETE /items/:name', function(){
    test('Get an item from your list', async function(){
        let res = await request(app).delete(`/items/${banana.name}`)
        expect(res.status).toBe(200)
        expect(res.body).toEqual({ message: "Deleted" });
    })
    test("404 on missing item", async function() {
        const res = await request(app).delete(`/items/2`);
        expect(res.statusCode).toBe(404);
    })
})