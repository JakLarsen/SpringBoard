import React from "react";
import ColorStyle from './component-style-objects/ColorStyle'

const Alert = ({variant='success', children}) => {
    
    let msgColor = new ColorStyle()

    return (
        <div style={{backgroundColor: msgColor.AlertColor[variant]}}>
            {children}
        </div>
    )
}

export default Alert;