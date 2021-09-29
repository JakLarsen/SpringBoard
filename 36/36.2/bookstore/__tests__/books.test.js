const db = require('../db')
const Book = require('../models/book.js')

describe("Test Book Class", function(){
    
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
    })

    test("Can Create Book", async function(){
        let testBook2 = await Book.create(
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
    })
})

afterAll(async function() {
    await db.end();
});