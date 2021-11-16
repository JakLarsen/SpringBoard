import React from "react";



const Alert = ({messages}) => {

    return (
        <div>
            {messages.map(message => (
                <div>{message}</div>
            ))}

        </div>
    )
}

export default Alert