



const cat ={
    name: 'Blue',
    breed: 'Scottish',
    dance: function(dance){
        console.log(`Meow, I am ${this.name} and I like to ${dance}.`);
    }
}

//both reference same object, but give different results when called
//the difference is THIS
//this is the window object for bluesDance but the cat obj for cat.dance
const bluesDance = cat.dance;
//bluesDance will print a blank name value because the window object has a name property
//if you swapped in breed there, it would show undefined

//when you call a function on nothing in javaScript it is called on the global object (window or global)
//vs when you call it from an object, this refers to the object it was called on
//THIS IS SET TO WHATEVER YOU HAVE TO THE LEFT OF YOUR .
//cat.dance THIS is refering to the cat obj
//bluesDance() THIS is referring to the global object
//let and const arent technically added to the window object, but act the same
//var would let you use window.bluesDance()

//.call changes the target of THIS
bluesDance.call(cat, 'tango');
cat.dance.call(window, 'salsa');

//.bind can perma-bind a function to the context
//gives you a version of the function where THIS has been bound to a specific context
const boundDance = bluesDance.bind(cat);
//versus bluesDance() which is still setting THIS to window


//CLASSES



class TriangleClassObj{
    //constructor is run for us when new instances instantiated
    //are actually valid, positive integers
    //often used to validate data, like making sure numbers that are passed in
    //dont return values from constructors!
    constructor(a,b,c){
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0){
                //throw error to stop execution if you want
                throw new Error('Sides must be positive numbers');
            }  
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig(){
        return this.getArea() > 50;
    }
    display(){
        return `Triangle with sides of ${this.a} and ${this.b} and ${this.c}`;
    }
}
// const firstTri = new TriangleClassObj(3,4,5);
// // firstTri.a = 3;
// // firstTri.b = 4;
// const secondTri = new TriangleClassObj(9,12,15);
// // secondTri.a = 9;
// // secondTri.b = 12;
const t11 = new TriangleClassObj(5,6,7);

class RightTriangleClass extends TriangleClassObj{
    //super calls constructor of superclass. Have to call it before setting other properties
    constructor(a,b,c){
        if(a*a + b*b !== c*c){
            throw new Error ('Invalid hypoteneus');
        }
        super(a,b,c);
        //can add more stuff after super constructor
        this.hypot =  c;
    }
    display(){
        return "Right " + super.display();
        // console.log(`Right T with sides of ${this.a}, ${this.b}, ${this.c}`)
    }
}




//constructor functions (emulating classes)
function Triangle(a,b){
    this.a = a;
    this.b = b;
    // this.getArea = function(){
    //     return (this.a * this.b)/2;
    // };
    // this.getHypo = function(){
    //     return Math.sqrt(this.a**2 + this.b**2);
    // };
}
Triangle.prototype.getArea = function(){
    return (this.a * this.b)/2;
};
Triangle.prototype.getHypo = this.getHypo = function(){
    return Math.sqrt(this.a**2 + this.b**2);
};

const t1 = new Triangle(3,4);
const t2 = new Triangle(4,5);
t1.getHypo();
t2.getHypo();




//properties of right triangles 3,4,5
// function getHypo(a,b){
//     return Math.sqrt(a**2 + b**2);
// }
// function getArea(a,b){
//     return a*b/2;
// }

// const s1 = 3;
// const s2 = 4;
// const s3 = getHypo(s1, s2);
// const area = getArea(s1, s2);

//triangle object
//this refers to this object
//this refers the WINDOW OBJECT IF YOU USE AN ARROW FUNCTION - dont use 
let rightTriangle = {
    a: 3,
    b: 4,
    printThis() {
        console.log(this);
    },
    getArea(){
        return (this.a * this.b)/2;
    },
    getHypo(){
        return Math.sqrt(this.a**2 + this.b**2);
    }
}

//prototypes - an object that stores functionality for all instances
Array.prototype.butt = function(val){
    console.log('butttest');
}
let arr = [1,2];

//polyfills - checks if a specific set of code is defined in a browser,
//if not, it adds it



let o1 = {};
let o2 = new Object(); //same thing
o1.name = "Whiskey";
o1["lastName"] = "Delta"; //same thing, except within the brackets is evaluated
const color = 'teal';
const obj = {};
obj.color = '#32344F';
obj[1+2*4-9] = '#32344F'; //the evaluated key is turned into a string '0'

Object.keys(obj); // returns key array
Object.values(obj); //returns value array
Object.entries(obj); //return k,v pair array

for(let [k,v] of Object.entries(obj)){ //destructures the k,v array from Object.entries
    console.log(k,v);
}

//properties that don't exist on objects that are accessed return as undefined
//all keys are stringified in obj[Stringified] = val;

//functions as properties = A METHOD

o1.saysHi = function(){return "Hi"}

const add = (x,y) => x+y;
const mult = (x,y) => x*y;
const square = (x) => x*x;
const power = (x,y) => x**y;

//options for adding functions as properties on an object
const myMath = {
    add,
    mult,
    cube: function(x) {
        return x ** 3;
    },
    quad(x) {
        return x**4;
    }
};
myMath.power = power;

// myMath.add(3,4);
// myMath.mult(8,3);
// myMath.power(3,3);