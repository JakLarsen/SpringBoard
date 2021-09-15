const {getMean, getMedian, getMode} = require('./mmm.js')


const TESTARR1 = [1,2,3,4,5,6,7,8]
const TESTARR2 = [1,2,3,4,5,6,7]
const TESTARR3 = [1,2,2,2,3,4,5,6,7]
const TESTARR4 = [1,2,2,2,3,3,3,3,4,5,6,7]
//-1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 12, 24, 33
const TESTARR5 = [-1,2,2,3,7,3,24,5,6,3,12,4,33]
const TESTARR6 = [-1, 12,2,24,2,33,3,'pizza',3,4,5,6,7]


describe ('getMean', function(){
    test('Mean should give the average of a set of numbers', function(){
        let res = getMean(TESTARR1)
        expect(res).toEqual(4.5)
        res = getMean(TESTARR5)
        expect(res).toEqual(103/13)
    })
})
describe ('getMedian', function(){
    test('Median should give the middle of an odd set of numbers or the average of the two middle numbers in an even set', function(){
        let res = getMedian(TESTARR1)
        expect(res).toEqual(4.5)
        res = getMedian(TESTARR2)
        expect(res).toEqual(4)
        res = getMedian(TESTARR5)
        expect(res).toEqual(4)
    })
})
describe ('getMode', function(){
    test('Mode should get the most frequent number or return the first number of equal frequency for this case', function(){
        let res = getMode(TESTARR1)
        expect(res).toEqual(1)
        res = getMode(TESTARR4)
        expect(res).toEqual(3)
    })
})
