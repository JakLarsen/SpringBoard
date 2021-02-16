const family = {
    mom: "karn",
    dad: "bill"
}

const kids = {
    brother: "stephern",
    sister: "missy"
}



const zeroTen = [0,1,2,3,4,5,6,7,8,9];
const tenTwenty = [10,11,12,13,14,15,16,17,18,19];


const filterOutOdds = (...arguments) => arguments.filter((num) => num % 2 === 0);

const findMin = (...arguments) => 
    arguments.reduce((min, currentNum) => min < currentNum ? min : currentNum);

//or
const findMin2 = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...values) => 
    [...arr, ...args.map((num) => num*2)];

const removeRandom = (...items) => {
    let i = Math.floor(Math.random() * items.length);
    return items.filter((item) => item !== items[i]);
} 

const extend = (arr1, arr2) => ([...arr1, ...arr2]);

//was so close on this but tried to string literal key 
//and key: val would give val to 'key' instead of whatever the key arguement was
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});
    
const addKeyVal2 = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val; 
    return newObj;
}

const removeKey = (obj, key) => {
    delete obj[key];
    return obj;
};

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});
