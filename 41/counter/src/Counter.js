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
        console.log(this.props)
    }


    render(){
        const {color} = this.props
        return (
            <div>
                <h1>Count: </h1>
                <button style={{color: color}}>Add</button>
            </div> 
        )
    }
}


export default Counter