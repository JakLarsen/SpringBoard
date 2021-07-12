console.log("Hello")
for (let i =0; i<10;i++){
    console.log(i);
}

let matrix =[
    ['a','b','c'],
    ['d','e','f'],
    ['a','b','c'],
]

for(let i=0;i<matrix.length;i++){
    let subArr = matrix[i];
    for(let j=0;j<subArr.length;j++){
        console.log(subArr[j]);
    }
}
let career = "Software Developer"
let msg = `Hi, I am a ${career}.`
console.log(msg)

function greet(){
    console.debug("greet()")
    console.log("Hey there!")
}
function diss(){
    console.debug("diss()")
    console.log("You suck!")
}

greet();
setTimeout(diss, 5000); //setTimeout hands off responsibility to browser, so rest of JS keeps going
greet();

let timerId = setInterval(diss, 2000);
let timer2Id = setInterval( ()=> {greet();}, 3000);
setTimeout(()=> {clearInterval(timerId)}, 4000);
setTimeout(()=> {clearInterval(timer2Id)}, 6000);
