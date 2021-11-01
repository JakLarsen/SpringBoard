import React, {useState} from 'react'


//NORMAL

// const Counter = () => {
//     const INITIAL = 0
//     const [count, setCount] = useState(INITIAL)
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Add</button>
//         </div>
//     )
// }



//CLASS-BASED
class Counter extends React.Component{

    constructor(props) {
        super(props);
        //ONE STATE for each component instead of separated state
        this.state = {
            count: 0,
            isHiding: false
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment () {
        this.setState({count: this.state.count+1})
    }
    decrement () {
        this.setState({count: this.state.count-1})
    }

    render(){
        const {color} = this.props
        const {count} = this.state
        return (
            <div>
                <h1 style={{color: color}}>Count: {count} </h1>
                <button onClick={()=>this.setState({count: count+1})}>Add</button>
                <button onClick={()=>this.setState({count: count-1})}>Subtr</button>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Subtr</button>
            </div> 
        )
    }
}


export default Counter