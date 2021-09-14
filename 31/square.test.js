const {squareMe, cubeMe} = require('./square.js')


describe ('Square Function', function(){
    test('Square should square a number', function(){
        const res = squareMe(3)
        expect(res).toEqual(9)
    })

    test('Square should square negtative numbers', function(){
        const res = squareMe(-9)
        expect(res).toEqual(81)
    })
})

describe ('Cube Function', function(){
    test('Cube should cube a positive number', function(){
        const res = cubeMe(3)
        expect(res).toEqual(27)
    })
    test('Cube should give -cube of a negative number', function(){
        const res = cubeMe(-2)
        expect(res).toEqual(-8)
    })
})