



const Alert = (props) =>{
    return(
        <div>
            🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
            <span>{props.children}</span>
            🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        </div>
    )
}


const RandomChoice = (props) => {
    console.log(props)
    const idx = Math.floor(Math.random() * props.choices.length)
    const choice = props.choices[idx]
    return <h4>{choice}</h4>
}

const RandomNumRange = ({min=0, max=100}) => {

    const rand = Math.floor(Math.random() * (max - min)) + min
    return (
        <div>
            <h4>Between {min} and {max}: {rand}</h4>
        </div>
    )
}

const Bouncer = (props) =>{
    let isOldEnough = props.age >= 21 ? "Yes" : "No"
    return (
        <div>
            <h4>Age: {props.age}</h4>
            <h4>Let them in: {isOldEnough}</h4>
        </div>
    ) 
}

const Animal = (props) =>{
    console.log(props)
    return (
        <div>
            <h1>{props.emoji}</h1>
            <h3>Name: {props.name}</h3>
            <h3>Species: {props.species}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Is cute? {props.isCute ? 'Cute' : 'Not so Cute'}</h3>
        </div> 
    )
}

const ToDoList = (props) =>{
    // const todos = [];
    // for(let t of props.todos){
    //     todos.push(<li>{t}</li>)
    // }
    return (
        <div>
            <h4>ToDo List</h4>
            <ul>{props.todos.map(todo => <li>{todo}</li>)}</ul>
        </div>
    )
}

const App = () =>{
    return (
        <div>
            <RandomChoice choices={['red','green','yellow']} obj={{cool: 3}}/>
            <RandomNumRange min={20} max={30}/>
            <RandomNumRange max={30}/>
            <Bouncer age={17}/>
            <Bouncer age={22}/>
            <Animal 
                emoji="😼" 
                name="Mittens" 
                species="Cat" age={3}
                isCute/>
            <Animal 
                emoji="🐶" 
                name="Spot" 
                species="Dog" 
                age={4}/>
            <Animal/>
            <ToDoList todos={['Play Piano', 'Stretch', 'Workout']}/>
            <Alert>
                <ToDoList todos={['Play Piano', 'Stretch', 'Workout']}/>
            </Alert>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))