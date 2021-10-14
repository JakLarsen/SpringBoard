const app = require("../app");
const {NotFoundError,BadRequestError,UnauthorizedError} = require("../expressError");
const db = require("../db.js");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const request = require("supertest");
let u1pass = "asdasd"
let u2pass = "asdasd"




async function commonBeforeAll(){
    await db.query("DELETE FROM users");
    u1Pass = await bcrypt.hash("password1", BCRYPT_WORK_FACTOR)

    await db.query(`
    INSERT INTO users
        (username,
        password,
        first_name,
        last_name,
        email,
        phone,
        admin)
    VALUES 
        ('u1', $1, 'U1F', 'U1L', 'u1@email.com', '1234567890', 'true'),
        ('u2', $2, 'U2F', 'U2L', 'u2@email.com', '1234567890', 'false')
    RETURNING username`,
  [
    u1pass,
    await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
  ]);
}

async function commonBeforeEach() {
    await db.query("BEGIN");
}

async function commonAfterEach() {
    await db.query("ROLLBACK");
}

async function commonAfterAll() {
    await db.end();
}

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);




/**PATCH /users */

describe("PATCH /users/:username", ()=>{
    test("Should work", async function(){

        const response = await request(app).patch(`/users/u1`).send(
            {
                first_name: "jake"
            }
        )
        expect(response.body).toEqual(
            {
                user: {
                    username: "u1",
                    first_name: "jake",
                    last_name: "U1L",
                    email: "u1@email.com",
                    phone: '1234567890',
                    admin: true,
                    password: `${u1pass}`
                }
            }
        )



    });
    // test("Should not allow updates to username or password", async function(){
    //     const response = await request(app).patch(`/users/u1`).send(
    //         {
    //             first_name: "WE DID IT",
    //             username: 'not-allowed',
    //             password: 'not-allowed'
    //         }
    //     )
    //     expect(response.body).toEqual(
    //         {
    //             user: {
    //                 username: "u1",
    //                 first_name: "WE DID IT",
    //                 last_name: "U1L",
    //                 email: "u1@email.com",
    //                 phone: '1234567890',
    //                 admin: false,
    //                 password: `${u1Pass}`
    //             }
    //         }
    //     )
    // });


    // test("unauth for anon", async function () {
    //     const resp = await request(app)
    //         .patch(`/users/u1`)
    //         .send({
    //             firstName: "New",
    //         });
    //     expect(resp.statusCode).toEqual(401);
    //     });
})






/************************************** PATCH /users/:username */


//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .patch(`/users/u1`)
//         .send({
//           firstName: "New",
//         });
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("not found if no such user", async function () {
//     const resp = await request(app)
//         .patch(`/users/nope`)
//         .send({
//           firstName: "Nope",
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(404);
//   });

//   test("bad request if invalid data", async function () {
//     const resp = await request(app)
//         .patch(`/users/u1`)
//         .send({
//           firstName: 42,
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(400);
//   });

//   test("works: set new password", async function () {
//     const resp = await request(app)
//         .patch(`/users/u1`)
//         .send({
//           password: "new-password",
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.body).toEqual({
//       user: {
//         username: "u1",
//         firstName: "U1F",
//         lastName: "U1L",
//         email: "user1@user.com",
//         isAdmin: false,
//       },
//     });
//     const isSuccessful = await User.authenticate("u1", "new-password");
//     expect(isSuccessful).toBeTruthy();
//   });
// });

/************************************** POST /users */

// describe("POST /users", function () {
//   test("works for users: create non-admin", async function () {
//     const resp = await request(app)
//         .post("/users")
//         .send({
//           username: "u-new",
//           firstName: "First-new",
//           lastName: "Last-newL",
//           password: "password-new",
//           email: "new@email.com",
//           isAdmin: false,
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(201);
//     expect(resp.body).toEqual({
//       user: {
//         username: "u-new",
//         firstName: "First-new",
//         lastName: "Last-newL",
//         email: "new@email.com",
//         isAdmin: false,
//       }, token: expect.any(String),
//     });
//   });

//   test("works for users: create admin", async function () {
//     const resp = await request(app)
//         .post("/users")
//         .send({
//           username: "u-new",
//           firstName: "First-new",
//           lastName: "Last-newL",
//           password: "password-new",
//           email: "new@email.com",
//           isAdmin: true,
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(201);
//     expect(resp.body).toEqual({
//       user: {
//         username: "u-new",
//         firstName: "First-new",
//         lastName: "Last-newL",
//         email: "new@email.com",
//         isAdmin: true,
//       }, token: expect.any(String),
//     });
//   });

//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .post("/users")
//         .send({
//           username: "u-new",
//           firstName: "First-new",
//           lastName: "Last-newL",
//           password: "password-new",
//           email: "new@email.com",
//           isAdmin: true,
//         });
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("bad request if missing data", async function () {
//     const resp = await request(app)
//         .post("/users")
//         .send({
//           username: "u-new",
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(400);
//   });

//   test("bad request if invalid data", async function () {
//     const resp = await request(app)
//         .post("/users")
//         .send({
//           username: "u-new",
//           firstName: "First-new",
//           lastName: "Last-newL",
//           password: "password-new",
//           email: "not-an-email",
//           isAdmin: true,
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(400);
//   });
// });

// /************************************** GET /users */

// describe("GET /users", function () {
//   test("works for users", async function () {
//     const resp = await request(app)
//         .get("/users")
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.body).toEqual({
//       users: [
//         {
//           username: "u1",
//           firstName: "U1F",
//           lastName: "U1L",
//           email: "user1@user.com",
//           isAdmin: false,
//         },
//         {
//           username: "u2",
//           firstName: "U2F",
//           lastName: "U2L",
//           email: "user2@user.com",
//           isAdmin: false,
//         },
//         {
//           username: "u3",
//           firstName: "U3F",
//           lastName: "U3L",
//           email: "user3@user.com",
//           isAdmin: false,
//         },
//       ],
//     });
//   });

//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .get("/users");
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("fails: test next() handler", async function () {
//     // there's no normal failure event which will cause this route to fail ---
//     // thus making it hard to test that the error-handler works with it. This
//     // should cause an error, all right :)
//     await db.query("DROP TABLE users CASCADE");
//     const resp = await request(app)
//         .get("/users")
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(500);
//   });
// });

// /************************************** GET /users/:username */

// describe("GET /users/:username", function () {
//   test("works for users", async function () {
//     const resp = await request(app)
//         .get(`/users/u1`)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.body).toEqual({
//       user: {
//         username: "u1",
//         firstName: "U1F",
//         lastName: "U1L",
//         email: "user1@user.com",
//         isAdmin: false,
//       },
//     });
//   });

//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .get(`/users/u1`);
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("not found if user not found", async function () {
//     const resp = await request(app)
//         .get(`/users/nope`)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });

// 

// /************************************** DELETE /users/:username */

// describe("DELETE /users/:username", function () {
//   test("works for users", async function () {
//     const resp = await request(app)
//         .delete(`/users/u1`)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.body).toEqual({ deleted: "u1" });
//   });

//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .delete(`/users/u1`);
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("not found if user missing", async function () {
//     const resp = await request(app)
//         .delete(`/users/nope`)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });
