


const arr = [{name: 'Elie'}, {FIRST: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
const word = "Thisisabigwordthatisactuallymultiplewords";
const vowels = "aeiou";
const nums = [1,2,3,4,5,6,7,8];

let extractedValues = extractValue(arr, "name");
let extractedValuesClass = extractValueClass(arr, "name");
let vowelMapped2 = vowelCount2(word);
let lessGreater = partition(nums, isGreater, 3);


function extractValue(arr, key){
    let valueArr = [];
    arr.forEach(function(object){
        if(object[key]){
            valueArr.push(object[key]);
        }
    });
    return valueArr;
}

//class code -  extractValue 
function extractValueClass(arr, key){
    return arr.reduce(function(acc,next){
        if(next[key]){
            acc.push(next[key]); 
        }
        return acc;
    },[]);
}

//rewriting practice to learn reduce
function evc (arr, key){
    return arr.reduce(function(acc, nextObj){
        if(nextObj[key]){
            acc.push(nextObj[key]);
        }
    },[]);
}


function vowelCount2(str){
    let vowelFreq = {};
    let strArr = str.toLowerCase().split('');
    //turns out you don't need to split the vowel array and can iterate a string with indexOf
    // let vowelArr = vowels.split('');
    strArr.forEach(letter => {
        if(vowels.indexOf(letter) !== -1){
            if(vowelFreq[letter]){
                vowelFreq[letter] ++;
            }
            else{
                vowelFreq[letter] = 1;
            }
        }
    });
    return vowelFreq;
}

//class code with reduce 
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

//practice replicating and understanding
function vowelCountprac(str){
    const vowels = "aeiou";
    let strArr = str.toLowerCase().split('');
    return strArr.reduce(function(vowelFreq,nextLetter){
        if(vowels.indexOf(nextLetter) !== -1){
            if(vowelFreq[nextLetter]){
                vowelFreq[nextLetter] ++;
            }
            else{
                vowelFreq[nextLetter] = 1;
            }
        }
        return vowelFreq;
    },{});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(arrOfObjects,nextObj,i, arr){
        arrOfObjects[i][key] = value;
        return arrOfObjects;
    },arr);
}


function isGreater(num, pivot){
    return num > pivot;
}
function partition(arr, callback, pivot){
    return arr.reduce(function(arrOfArr,next){
        if(isGreater(next, pivot)){
            arrOfArr[1].push(next);
        }
        else{
            arrOfArr[0].push(next);
        }
        return arrOfArr;
    },[[],[]]);
}   

