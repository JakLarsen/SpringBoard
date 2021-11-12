import React from 'react'
import '../css/Company.css'
import {useParams} from 'react-router-dom'



const Company = () => {

    const { handle } = useParams();

    return (
        <div className="Company">
            <div>{handle}</div>
            {/* <div className="Company-title">{company.name}</div>
            <div className="Company-description">{company.description}</div> */}
        </div>
    )
}

export default Company