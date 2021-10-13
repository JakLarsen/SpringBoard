

class ColorStyle{
    constructor(colors = {}, AlertColor = {}){
        this.color = colors 
        this.AlertColor  = AlertColor
    }
    AlertColor={
        'success': 'green',
        'failure': 'red'
    }
}

export default ColorStyle;
