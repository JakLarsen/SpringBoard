const numbers = [0,1,2,3,4,5,6,7,8,9];
const odds = [1,3,5,7,9];
const dupes = [1,1,3,5,7];
let instructors = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

let oddNumberExists = hasOddNumber(numbers);
let zeroExists = hasAZero(numbers);
let oddsCatch = hasOnlyOddNumbers(numbers);
let oddsOnly = hasOnlyOddRev(odds);
let noDupes = hasNoDuplicates(numbers);
let keyExists = hasCertainKey(instructors, "first");
let keyDoesntExist = hasCertainKey(instructors, "Car");




//DONT FORGET TO RETURN THE ARRAY AS WELL!
//Also can eliminate if statement and just return on the conditional
function hasOddNumber(arr){
    return arr.some(function(num){
        if (num % 2 !== 0){
            return true;
        }
        return false;
    });
}

function hasAZero(arr){
    return arr.some(function(num){
        return num === 0;
    });
}

//this one also doesn't need the if statement to search for any exception case
function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        if (num % 2 === 0){
            return false;
        }
        return true;
    });
}

function hasOnlyOddRev(arr){
    return arr.every(function(num){
        return num % 2 !== 0;
    });
}

//checking set length against array length
function hasNoDuplicates(arr){
    return new Set(arr).size === arr.length;
}

//Class code - checking first index = to last index to assume there are no others
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

 
function hasCertainKey(arr, key){
    return arr.every(function(item){
        return item[key] !== undefined;
    });
}

//class code - checking if the key property is in the object
function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val
    })
}

function hasCertainValue(arr,key,value){
    return arr.every(function(item){
        return item[key] === value;
    });
}