const {squareMe} = require('./square.js')

test('Square should square a number', function(){
    const res = squareMe(3)
    expect(res).toEqual(9)
})
