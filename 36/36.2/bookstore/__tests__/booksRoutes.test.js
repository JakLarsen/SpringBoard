const db = require('../db')
const Book = require('../models/book.js')
const request = require("supertest");
const app = require("../app");
process.env.NODE_ENV === "test"

describe("Books Routes Tests", function(){
    
    beforeEach(async function(){
        await db.query("DELETE FROM books");
        let testBook = await Book.create(
            {
                "isbn": "0691161518",
                "amazon_url": "http://a.co/eobPtX2",
                "author": "Matthew Lane",
                "language": "english",
                "pages": 264,
                "publisher": "Princeton University Press",
                "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                "year": 2017
            }
        )
    });

    describe ("GET /books", function(){
        test("Can Get Books", async function(){
            let response = await request(app).get("/books")
            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual(
                {
                    "books" : [
                        {
                            "isbn": "0691161518",
                            "amazon_url": "http://a.co/eobPtX2",
                            "author": "Matthew Lane",
                            "language": "english",
                            "pages": 264,
                            "publisher": "Princeton University Press",
                            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                            "year": 2017
                        }
                    ]
                }
            )
        })
    });

    describe ("POST /books", function(){
        test("Can Create Books", async function(){
            let response = await request(app).post("/books").send(
                {
                    "isbn": "06911615181",
                    "amazon_url": "http://a.co/eobPtX21",
                    "author": "Matthew Lane1",
                    "language": "english",
                    "pages": 2641,
                    "publisher": "Princeton University Press1",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games1",
                    "year": 2017
                }
            )
            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(
                {
                    "book" :
                    {
                        "isbn": "06911615181",
                        "amazon_url": "http://a.co/eobPtX21",
                        "author": "Matthew Lane1",
                        "language": "english",
                        "pages": 2641,
                        "publisher": "Princeton University Press1",
                        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games1",
                        "year": 2017
                    }
                }
            )
        })
    });





})

afterAll(async function () {
  await db.end();
});