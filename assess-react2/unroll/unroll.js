// unroll should take in such a square array (n arrays with n columns)
// and return a single array containing the values in the square. 
// You should obtain the values by traversing the square in a spiral: 
// from the top-left corner, move all the way to the right, then all the way down, 
// then all the way to the left, then all the way up, and repeat.

// For the above example, 
//given 
const squareArr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
// unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].



function unroll(squareArray) {
    const arr = [];
    
    while (squareArray.length) {
      arr.push(
        ...squareArray.shift(),
        ...squareArray.map(a => a.pop()),
        ...(squareArray.pop() || []).reverse(),
        ...squareArray.map(a => a.shift()).reverse()
      );
    }
    return arr;
}
console.log(unroll(squareArr))

module.exports = unroll;
