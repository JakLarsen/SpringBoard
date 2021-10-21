import React, {useState} from 'react'
import gameData from './game_data_1'
import LightCell from './LightCell'
import './Board.css'



const Board = () =>{
    
    const [lightCells, setLightCells] = useState(gameData)


    function gameOver(){
        let result = true 

        lightCells.map(LCRow=>{
            LCRow.map(LC=>{
                if(LC.val == 1){
                    result = false
                }
            })
        })
        return result
    }

    function changeLights(x,y) {
        

        setLightCells(lightCells => {
            const updateSurrounding = (x, y, boardCopy) => {
                console.log('updateSurrounding()')
            if (x >= 0 && x < 5 && y >= 0 && y < 5) {
                console.log('Valid IDX')

                let boardCopyTarget = boardCopy[x][y]
                let boardRealTarget = lightCells[x][y]

                console.log('CHANGING AT: ', x,y)
                console.log('Copy Target PRE Changes: ', boardCopyTarget.val)
                console.log('Real Target PRE Changes: ', boardRealTarget.val)

                if(boardCopyTarget.val == 1){
                    boardCopyTarget.val = 0
                    console.log('Copy Target Change TO Dark and 0: ', boardCopyTarget.val)
                    console.log('Real Target Change TO Dark and 0: ', boardRealTarget.val)
                }
                
                else{
                    boardCopyTarget.val = 1
                    console.log('Copy Target Change TO LIGHT and 1: ', boardCopyTarget.val)
                    console.log('Real Target Change TO LIGHT and 1: ', boardRealTarget.val)
                }
                
                console.log('Copy Target POST Changes: ', boardCopyTarget.val)
                console.log('Real Target POST Changes: ', boardRealTarget.val)
            }
        }

            let boardCopy = lightCells.map(LCRow => LCRow.map(obj => {return {...obj}}));

            updateSurrounding(x, y, boardCopy);
            updateSurrounding(x, y - 1, boardCopy);
            updateSurrounding(x, y + 1, boardCopy);
            updateSurrounding(x - 1, y, boardCopy);
            updateSurrounding(x + 1, y, boardCopy);

            console.log(boardCopy)
            return boardCopy;
        });
    }

    if (gameOver()){
        return (
            <div>
                You Win!
            </div>
        )
    }

    return(
        <div className="Board">
            <h1 className="Board-title">Light's Out</h1>
            <div className="Board-grid">
                {lightCells.map(LCRow =>
                    LCRow.map(LC =>
                        <LightCell 
                            changeLights={()=>changeLights(LC.x, LC.y)}
                            val={LC.val}
                            x={LC.x}
                            y={LC.y}
                        />
                    )
                )}            
            </div>
        </div>
    )
}

export default Board