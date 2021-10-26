import React, {useState} from 'react'






const Story = ({id, noun1, noun2, adjective, color}) => {


    return (
        <div>
            <h1>The {adjective} {noun1} danced in the forest with the {color} {noun2}.</h1>
        </div>
    )
}

export default Story