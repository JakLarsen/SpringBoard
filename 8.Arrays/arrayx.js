const numbers = [0,1,2,3,4,5,6,7,8,9];
const words = ['apple','banana','cow','dog','elephat'];
const instructors = [
    {name: 'Jake'},
    {name: 'Mike'},
    {name: 'Bill'},
    {name: 'Cat'}
];
const names = [
    {first: 'Jake', last: 'Larsen'},
    {first: 'Mike', last: 'Limits'}
]
const key = "title";
const value = "instructor";

let doubledNumbers = doubleValues(numbers);
let evenNumbers = onlyEvenValues(numbers);
let firstAndLastLetters = showFirstAndLast(words);
let keyValueArray = addKeyAndValue(instructors, key, value);
let vowelObject = vowelCount('Happy Birthday');
let doubledNumbersMap =  doubleValuesWithMap(numbers);
let valIndexMap = valTimesIndex(numbers);
let keyExtract = extractKey(instructors, 'name');
let nameExtract = extractFullName(names);
let numbersFound = find(numbers, 2);
let numbersFound11 = find(numbers, 11);

// FUNCTIONS

//FOREACH
function doubleValues(arr){
    const doubledArray = [];
    for(let i=0;i<arr.length;i++){
        doubledArray.push(arr[i]*2);
    }
    return doubledArray;
};

function onlyEvenValues(arr){
    const evenArray = [];
    arr.forEach(function(val){
        if(val % 2 == 0){
            evenArray.push(val);
        }
    });
    return evenArray;
}

function showFirstAndLast(arr){
    const firstAndLastArray = [];
    arr.forEach(function(val){
        firstAndLastArray.push(val[0]+val.slice(-1));
    });
    return firstAndLastArray;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    let vowelCountObject = {};
    let charArray = str.split("");
    const vowels = "aeiouy";

    charArray.forEach(function(char){
        let lowerChar = char.toLowerCase();
        if (vowels.indexOf(lowerChar) !== -1){
            if(vowelCountObject[lowerChar]){
                vowelCountObject[lowerChar] += 1;
            }
            else{
                vowelCountObject[lowerChar] = 1;
            }
        }
    });
    return vowelCountObject;
}

//MAP
function doubleValuesWithMap(arr){
    return arr.map(function(num){
        return num * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, i, arr){
        return val*i;
    });
}

function extractKey(arr, key){
    return arr.map(function(val, i, arr){
        return val[key];
    });
}

function extractFullName(arr){
    return arr.map(function(val,i,arr){
        return val.first + " " + val.last;
    });
}


//FILTER
function filterByValue(arr, key){
    return arr.filter(function(val,i,arr){
        return val[key] !== undefined;
    });
}

function find(arr, value){
    return arr.filter(function(val,i,arr){
        return val === value;
    })[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}
  




function removeVowels(str) {
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .filter(function(val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}
  
function doubleOddNumbers(arr) {
    return arr
        .filter(function(val) {
            return val % 2 !== 0;
        })
        .map(function(val) {
            return val * 2;
        });
}