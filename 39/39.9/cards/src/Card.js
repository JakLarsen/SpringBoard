import React from 'react'
import './Card.css'








const Card = ({value, suit}) => {




    return (
        <div className="Card">
            <span>{value}</span>
            <span>of</span>
            <span>{suit}</span>
        </div>
    )
}

export default Card