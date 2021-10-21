import React, {useState} from 'react'
import gameData from './game_data_1'
import LightCell from './LightCell'
import './Board.css'








const Board = () =>{
    
    const [lightCells, setLightCells] = useState(gameData)
    
    return(
        <div className="Board">
            <h1 className="Board-title">Light's Out</h1>
            <div className="Board-grid">
                {lightCells.map(LCRow=>
                    LCRow.map(LC=>
                        <LightCell number={LC}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Board