import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';
import Box from './Box'
import NewBoxForm from './NewBoxForm'





const BoxList = () => {

    const INITIAL_STATE = [
        {
            id: uuid(),
            height: 5,
            width: 5,
            backgroundColor: "blue"
        },
        {
            id: uuid(),
            height: 10,
            width: 10,
            backgroundColor: "pink"
        }

    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox}])
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter(box=>box.id != id))
    }

    return (
        <div>
            {boxes.map(box=>
                <Box 
                    key={box.id}
                    id={box.id}
                    backgroundColor={box.backgroundColor} 
                    height={box.height} 
                    width={box.width}
                    removeBox={removeBox}
                />

            )}
            <NewBoxForm addBox={addBox}/>
        </div>
    )
}

export default BoxList