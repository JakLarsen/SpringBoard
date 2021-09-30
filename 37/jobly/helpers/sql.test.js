const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");



describe("sqlForPartialUpdate", function(){

    test("sqlizes information properly from Company.update()", function(){
        let testCompanyData = 
        {
            name: "Jake Overtook This Company", 
            description: "MUAHAHAHA"
        }
        let testJsToSql = 
        {
            numEmployees: "num_employees",
            logoUrl: "logo_url",
        }
        let ourReturnedData = sqlForPartialUpdate(testCompanyData, testJsToSql)
        expect(ourReturnedData).toEqual(
            {
                setCols: '"name"=$1, "description"=$2',
                values: [ 'Jake Overtook This Company', 'MUAHAHAHA' ]
            }
        )
    })

    test("sqlizes information properly from User.update()", function(){
        let testUserData = 
        {
                firstName: "Evil",
                lastName: "Mastermind"
        }
        let testJsToSql = 
        {
            firstName: "first_name",
            lastName: "last_name",
            isAdmin: "is_admin",
            }
        let ourReturnedData = sqlForPartialUpdate(testUserData, testJsToSql)
        expect(ourReturnedData).toEqual(
            {
                setCols: '"first_name"=$1, "last_name"=$2',
                values: [ 'Evil', 'Mastermind' ]
            }
        )
    })

    test("No new data sent -> throw BadRequestError", function(){
        let testUserData = {}
        let testJsToSql = 
        {
            firstName: "first_name",
            lastName: "last_name",
            isAdmin: "is_admin",
        }

        try {
            let ourReturnedData = sqlForPartialUpdate(testUserData, testJsToSql)
            fail();
        } 
        catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    })


})