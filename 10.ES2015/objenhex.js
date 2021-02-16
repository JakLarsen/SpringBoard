



const createInstructor = (first, last) => {
    return{
        first,
        last
    }
}

const createInstructor2 = (first, last) => {
    return{
        firstName: first,
        lastName: last
    }
}

const favNum = (num) => {
    let ourInstructor = createInstructor2('jake', 'larsen');
    ourInstructor["favoriteNumber"] = num;
    return ourInstructor;
}

const instructorActions = {
    firstName: 'Jake',
    sayHi(){return "Hi!"},
    sayBye(){return `${instructorActions.firstName} says bye!`}
    //or sayBye(){return this.firstName says bye!}
}

const createAnimal = (species, action, noise) => {
    return{
        species,
        [action](){return noise}
    }
}

let dog = createAnimal('dog', 'bark', 'woof');