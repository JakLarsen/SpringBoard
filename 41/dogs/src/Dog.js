import dogsData from './dogsData';
import { useParams } from "react-router-dom";
import { upperCaseName } from './helpers';




const Dog = () => {

    let { name } = useParams();

    name = upperCaseName(name)

    const dogs = dogsData.dogs
    let ourDog = dogs.find((dog) => dog.name === `${name}`)
    console.log(ourDog)

    return(
        <div>
            <h1>{name} says woof!</h1>
            <h3>Did you know:</h3>
            <h4>{ourDog.facts[0]}</h4>
            <h4>{ourDog.facts[1]}</h4>
            <h4>{ourDog.facts[2]}</h4>
        </div>
    )
}

export default Dog