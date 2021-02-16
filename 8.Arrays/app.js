//array methods





//reduce
//accumulator is the end product that is being reduced down to and will be returned

// let evens = [2,4,6,8,10];

// evens.reduce(function(acc, nextVal){
//     return acc + nextVal;
// });


const words = ['hello', 'I', 'Love','You'];
const result = words.reduce(function(acc, nextV){
    console.log(acc, nextV);
    return acc + nextV;
});

const scores = [70,88,93,94,64,62,42];
// const minScore = scores.reduce(function(min, nextScore){
//     if(nextScore < min){
//         return nextScore;
//     }
//     return min;
// });


const minMidtermScore = scores.reduce(function(min, nextScore){
    //return (if nextScore < min, return nextScore... else, return min)
    return nextScore < min ? nextScore : min;
});

const maxMidtermScore = scores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore : max;
});

//can run with an initialized value as a second param which the accumulator starts as...
const finalScores =[70,80,92,45,60,99];
const minFinalScore = finalScores.reduce(function(min, nextVal){
    return nextVal < min ? nextVal : min;
}, minMidtermScore);

















// const nums = [20,30,50,12,-2,45,99,19,22,85];

// let total = 0;
// for(let num of nums){
//     total += num;
// }
// console.log(total);

// let min = nums[0];
// for(let num of nums){
//     if(num < min){
//         min = num;
//     }
// }
// console.log(min)

// const str = "lollapalooza";
// const charFreq = {};
// for(let char of str){
//     if(charFreq[char]){
//         charFreq[char] +=1;
//     }
//     else{
//         charFreq[char] = 1;
//     }
// }
// console.log(charFreq);


// //find and findindex

// const scores = [0,0,0,0,0,55,59,73,79,88,92,94,99];

// scores.find(function(score){
//     return score > 75;
// });

// scores.find(function(score){
//     return score > 100;
// });

// scores.find(function(score){
//     return score % 2 === 0 && score !== 0;
// });

// const evens = scores.filter(function(score){
//     return score !== 0 && score % 2 === 0;
// });

// scores.findIndex(function(score){
//     return score === 0;
// });

// const firsteven = scores.findIndex(function(score){
//     return score !== 0 && score % 2 === 0;
// });

// //indexOf(val) is great for specific values, but we use findIndex for abstract things like finding
// //evens or odds, types, etc.

// //partitioning sorted arrays
// function partition(arr, pivot){
//     const pivotIdx = arr.findIndex(function(el){
//         return el > pivot;
//     });
//     console.log(pivotIdx);
//     const left = arr.slice(0,pivotIdx);
//     const right = arr.slice(pivotIdx);
//     return [left, right];
// }

// function myFind(arr, callback){
//     for (let i = 0;i<arr.length;i++){
//         if(callback(arr[i].i.arr) === true){
//             return arr[i];
//         }
//     }
// }

// function myfindIndex(arr,callback){
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i],i,arr) === true){
//             return i;
//         }
//         return -1;
//     }
// }






//some and every - return a boolean

// let words = [
//     'awqeqweqwdqwfasfawsfqwfqwfqwfqqweqwdqwdqwdqw',
//     'bqwe',
//     'cfqwfqfqwfdasfqawfqawfqwfqwfqwfwqdqewtqgrghasddasdasdaasdasdasd',
//     'b',
//     'c'
// ];

// //returns true
// words.some(function(word){
//     return word.length > 25;
// });

// //returns true
// words.some(function(word){
//     return word.indexOf('b') === -1;
// });


// //returns true
// words.every(function(word){
//     return word.length > 0;
// });

// //returns false
// words.every(function(word){
//     return word.length > 3;
// });

// function allStrings(arr){
//     return arr.every(function(el){
//         return typeof el === 'string';
//     });
// }





// //Filter

// let words = [
//     'awqeqweqwdqwfasfawsfqwfqwfqwfqqweqwdqwd',
//     'bqwe',
//     'cfqwfqfqwfdasfqawfqawfqwfqwfqwfwqdqewtqgrgh',
//     'b',
//     'c'
// ];

// const isVowel = function(char){
//     return 'aeiou'.indexOf(char) != -1;
// }

// const containsVowel = function(word){
//     for (let char of word){
//         if(isVowel(char)) return true;
//     }
//     return false;
// }

// const longWords = words.filter(function(val, i, arr){
//     return val.length >= 20;
// });

// const acWords = words.filter(function(val, i, arr){
//     return val[0] === 'a' || val[0] === 'b';
// });

// const containsVowels = words.filter(containsVowel);

// const noVowels = words.filter(function(word){
//     return !containsVowel(word);
// })




// //map
// const numbers = [21,37,64,99,142];

// const negatives = numbers.map(function(num){
//     return num*-1;
// });

// const doubles = numbers.map(function(num){
//     console.log(num*2);
//     //have to return something or it will make a new array of undefines
// });

// const todos = [
//    {
//     id       : 1,
//     text     : 'walk the dog',
//     priority : 'high'
//    },
//    {
//     id       : 2,
//     text     : 'walks thes dogs',
//     priority : 'low'
//     }
// ]

// const todoIds = todos.map(function(todos){
//     return todos.id;
// })

// function myMap(arr, callback){
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++){
//         const val = callback(arr[i], i, arr);
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }
// const priorityMap = myMap(todos, function(todo){
//     return todo.priority;
// });

// const strMultMap = myMap(['a','b','c','d','e'], function(str, idx){
//     return str.repeat(idx);
// });





// //forEach
// const colors = ['teal', 'cyan', 'peach'];

// function yell(val, i){
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`)
// }

// colors.forEach(yell);

// const prices = [20.99, 99, 10.99];

// let total = 0;
// prices.forEach(function(price){
//     total += price;
// });
// console.log(total);

// function myForEach(arr, callback){
//     for (let i of arr){
//         callback(i, arr);
//     }
// }

// myForEach(colors, function(color, i){
//     console.log(color.toUpperCase());
// });

// function holler(){
//     console.log("Hey you!");
// };






// //function expression stored as variable
// const whisper = function(){
//     console.log("I have a secret");
// };

// function add(x,y){
//     return x + y;
// }
// function sub(x,y){
//     return x - y;
// }
// function mult(x,y){
//     return x * y;
// }
// function div(x,y){
//     return x / y;
// }

// const mathFuncs = [add, sub, mult, div];

// setTimeout(whisper, 4000);


// function doMath(a,b,mathFunc){
//     return mathFunc(a,b);
// }

// doMath(30,25, function(a,b){
//     console.log(a**b);
// });

// function doAllMath(a, b, mathFuncs){
//     console.log("called");
//     for (let func of mathFuncs){
//         console.log(func(a,b));
//     }
// }

