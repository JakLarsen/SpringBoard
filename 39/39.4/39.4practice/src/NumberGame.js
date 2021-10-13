
import React, {useState} from 'react'
import './NumberGame.css'


const getRandomNum = (min, max)=>{
    let ourNum = Math.floor(Math.random() * max) + min
    return ourNum
}

const NumberGame = (props) =>{
    
    const [target, setTarget] = useState(getRandomNum(1,10))
    const [guess, setGuess] = useState(getRandomNum(1, 10))
    const [guessCount, setGuessCount] = useState(0)

    const isWinner = target === guess

    const makeGuess = () =>{
        setGuess(getRandomNum(1,10))
        setGuessCount(guessCount+1)
    }
    
    const startOver = () =>{
        setTarget(getRandomNum(1,10))
        setGuessCount(0)
    }

    return (
        <div className="NumberGame">
            <h1 className={isWinner ? 'winner' : 'loser'}>Target is : {target}</h1>
            <h1 style={{color: isWinner ? 'green' : 'red'}}>Your Guess: {guess} </h1>
            <h3>Guess so far: {guessCount}</h3>
            
            {
                isWinner ||
                <button onClick={makeGuess}>Guess</button>
            }

            <button onClick={startOver}>Start Over</button>
        </div>
    )
}

export default NumberGame