import React, {useState} from 'react'
import '../css/Square.css'
import ballResponses from '../component-data/ball-responses'


const Square = ({width, height}) =>{
    
    
    const [msg, setMsg] = useState('More questions answered.')

    const getRandomNumber = (min, max) =>{
        let ourNum =  Math.floor(Math.random() * max) + min
        return ourNum
    }

    const updateSquare = ()=>{
        console.log('updateSquare called')
        let ourIDX = getRandomNumber(0, ballResponses.length)
        console.log(ballResponses[ourIDX])
        setMsg(ballResponses[ourIDX].msg)
    }
    
    return (
        <div className="square-container" onClick={updateSquare}>
            <h1>{msg}</h1>
        </div>
    )
}

export default Square;