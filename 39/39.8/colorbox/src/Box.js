import React from 'react'




const Box = ({backgroundColor, width, height, id, removeBox}) => {

    const boxStyles = {
        height: `${height}rem`,
        width: `${width}rem`,
        backgroundColor: backgroundColor
    }


    return (
        <div className="Box" style={boxStyles}>
            <button onClick={()=>removeBox(id)}>X</button>
        </div>
    )
}

export default Box