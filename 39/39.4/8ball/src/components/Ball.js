import React, {useState} from 'react'
import '../css/Ball.css'
import ballResponses from '../component-data/ball-responses'



const getRandomNumber = (min, max) =>{
    let ourNum = Math.floor(Math.random() * max) + min
    return ourNum
}



const Ball = () =>{
    
    const [msg, setMsg] = useState('Think of a Question')
    const [color, setColor] = useState('#272727')

        
    const updateBall = () =>{
        console.log('updateMsg called')
        let ourIDX = getRandomNumber(0, ballResponses.length-1)
        setMsg(ballResponses[ourIDX].msg)
        setColor(ballResponses[ourIDX].color)
    }

    return (
        <div className="Ball-container">
            <div className="Ball-ball" onClick={updateBall} style={{backgroundColor: color}}>
                <h1 className="Ball-prompt">{msg}</h1>
            </div>
        </div>
    )
}

export default Ball