const nums = [0,1,2,3,4,5,6,7,8,9];
const dailyRainTotals = [[1.2,0.35,2.2],[1.7,0.6,0.1],[2.5,0.9,1.5]];
const teaOrder = {
    variety : 'oolong',
    teaName : 'winter',
    origin  : 'taiwan',
    price   : 12.99,
    hasCaff : true
}

const students = [
    { name: 'jake0', gpa: 10},
    { name: 'mike1', gpa: 12},
    { name: 'mikee2', gpa: 12},
    { name: 'mikeee3', gpa: 12}
]


//MAP AND SETS

const myMap = new Map();
myMap.set(7, 'seven');
myMap.set('7', 'seven str');
myMap.get(7); //'seven'
myMap.set(true, 'True!');

const adds = (x,y) => x + y;
const mults = (x,y) => x * y;

const funcCalls = new Map();
funcCalls.set(adds, 1);
funcCalls.set(mults, 9);
















//DESTRUCTURING

const { price, origin, teaName, ...otherTeaProperties} = teaOrder; //already declares origin
const { country } = teaOrder; //undefined
// const { origin } = teaOrder; // origin already declared ERROR
const newTea = {...teaOrder};

//create a variable brewTemp 
const { brewTemp = 175 } = teaOrder;

//update teaOrder property without giving variable name
const { teaName: tea } = teaOrder;

// hasCaff will not be updated by this line
const { hasCaff = false} = teaOrder;

//creates a pr variable based on price if price already defined - pr will be 12.99
//or 10 if price doesn't exist
const { price: pr = 10.00 } = teaOrder;

function checkout (tea) {
    //if the tea doesn't already have a price listed, it costs 10
    const {price = 10} = tea;
    return price * 2;
}
//same thing but destructuring in the args instead of inside function
//if you nknow you only need some of the arguments
function getTotal({price}){
    return  price * 2;
}




//these are based off of positionings
// const [firstStudent, secondStudent,, fourthStudent] = students;
const [first, ...losers] = students;






//OBJECT ENHANCEMENTS

//old way
// function makePerson(first, last, age){
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

function makePerson(first, last, age){
    return {
        first, 
        last, 
        age,
        isAlive: true
    }
}

// //longhand
// const mathStuff = {
//     x: 200,
//     add: function(a,b){return a+b},
//     square: function(a){return a*a}
// }

//shorthand methods
const moreMath = {
    add(a,b){return a+b},
    square(a){return a*a}
}

const color = {
    periwinkle : '9c88ff',
    '9c88ff' : 'periwinkle'
};

//using arguments as property keys
function makeColor(name, hex){
    return{
        [name]: hex,
        [hex]: name
    }
};












//REST AND SPREAD

//create function with indefinite amount of arguments - old way
function sumNum(){
    const args = array.from(arguments);
    return args.reduce((sum, nextNum) => sum + nextnum);
}
const maxNum = function(){
    const args = Array.from(arguments);
    return args.reduce((max, nextNum) => nextNum > max ? nextNum : max);
}

//rest ... collects all arguments passed in after it into an array
function sum(...nums){
    console.log(nums);
    return nums.reduce((sum, nextVal) => sum + nextVal);
}
const sumAll = (...values) => values.reduce((sum, n) => sum + n);

//collects REMAINING arguments (always use as last argument)
function makeFamily(parent1, parent2, ...kids){
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    }
}
const filterByType = (type, ...vals) => 
    vals.filter((value) => typeof(value) === type);


//SPREAD - take an object/array etc and spread it into individual arguments
const nums2 = [1,2,3,4,5,6,7]

// Math.max(nums) //takes the entire array as a single argument - cant do
console.log(Math.max(...nums2)) //spreads the entire array as single arguments

//can spread a string with spaces inbetween letters
const coolString = "aeiou";
console.log(...coolString);
//or spread a string into a character array
const vowelString = [...coolString, 'sometimes y']; //same as vowelString.split('');

//copy array with spread
const arr = [1,2,4,5,6];
const arrCopy = [0, ...arr, 7];









//ARROW FUNCTIONS

const add = (x,y) => {
    return x + y;
};

nums.reduce(function(max, currentNum){
    return Math.max(max, currentNum);
});

//returning inplictly only works if you have a single expression in the arrow function
const maxnum = nums.reduce((max, currentNum) => Math.max(max, currentNum));
const sumnum = nums.reduce((sum, currentNum) => sum + currentNum);

//can leave parentheses off if just one param - but lame and inconsisten
nums.forEach((n) => {
    return n*10
});
nums.forEach(n => {
    return n*10;
});

const greet = () => {
    console.log("Hello");
}

const evennums = nums.filter((num) => num % 2 === 0);
const double =  (n) => n*2;
const triple = (n) => {
    return n*3;
}

//returning inplictly only works if you have a single expression in the arrow function
//this example can be done with either
const oddevenmap = nums.map((n) => {
    if(n % 2 === 0){
        return 'even';
    }
    return 'odd';
});
const oddevenoneline = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sumHourRainTotal, inchesOfRain) => {
        return sumHourRainTotal + inchesOfRain;
    });
});
//eww
dailyRainTotals.map((hourlyRainTotals) => hourlyRainTotals.reduce((sum, inches) => sum + inches));

const makeMath = (num) => {
    return{
        double: num*2,
        square: num*num
    }
}
//have to use extra parens if you return object literal implicitly
const makeMoreMath = (num) => (
    {
        double: num*2, 
        square: num*num
    }
);
