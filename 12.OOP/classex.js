

class Vehicle{
    constructor(year, make, model){
        this.year = year;
        this.make = make;
        this.model = model;
    }
    honk(){
        return 'Beep.';
    }
    toString(){
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

class Car extends Vehicle{
    constructor(year,make,model){
        super(year, make, model);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(year,make,model){
        super(year, make, model);
        this.numWheels = 2;
    }
    revEngine(){
        return 'Vroom!!!';
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if(this.vehicles.length < this.capacity){
            if(!(vehicle instanceof Car) && !(vehicle instanceof Motorcycle)){
                console.log('Only vehicles are allowed here!');
            }
            else{
                this.vehicles.push(vehicle);
                console.log(`Vehicle Added. Vehicle array: ${this.vehicles}. `);
            }
        }
        else{
            console.log("Sorry, we're full.");
        } 
    }
}