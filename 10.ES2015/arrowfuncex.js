const nums = [0,1,2,3,4,5,6,7,8,9];

const doubledNums = (arr) => arr.map((num) => num*2);

const squareAndFindEvens = (arr) => arr.map((num) => num**2)
    .filter((squaredNum) => squaredNum % 2 === 0);


