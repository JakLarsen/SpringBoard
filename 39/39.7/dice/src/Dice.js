import React, {useState} from 'react';
import Die from './Die';
import './Dice.css'


function getRandom(min = 1, max = 6){
    return Math.floor(Math.random()*max) + min
}

const Dice = ({numDice = 6, title = 'Main Game', maxVal = 20}) =>{
    
    const [numbers, setNumbers] = useState(Array.from({length:numDice}))
    const rollDice = () => {
        setNumbers(numbers=>(numbers.map(n=>getRandom(1, maxVal))))
    }
    
    return(
        <div className="Dice">
            <h2>{title}</h2>
            <div className = "Dice-con">
                {numbers.map(d => <Die num={d}/>)}
            </div>
            <button className="Dice-roll-btn" onClick={rollDice}>Roll</button>
        </div>
    )
}

export default Dice