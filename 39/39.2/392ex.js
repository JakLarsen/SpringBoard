




const FirstComponent = ({msg}) =>{
    return (
        <h1>{msg}</h1>
    )
} 

const NamedComponent = ({name}) =>{
    return (
        <p>My name is {name}.</p>
    )
}

const Tweet = ({username, name, date, msg}) =>{
    return(
        <div>
            <h1>{username} {name}</h1>
            <p>{msg}</p>
            <p>{date}</p>
        </div>
    )
}

const Person = (props) =>{
    return (
        <div>
            <p>Learn some information about {props.name}:</p>
            <h3>Age: {props.age} - {props.age >= 18 ? "Please go vote." : "You must be 18."}</h3>
            <h3>Name: {props.name} - Shortened: {props.name.length >= 6 ? props.name.substring(0,6) : props.name}</h3>
            <ul>
                {props.hobbies.map(hobby=><li>{hobby}</li>)}
            </ul>
        </div>
    )
}


const App = () =>{
    return(
        <div>
            <FirstComponent msg="My very first component"/>
            <NamedComponent name="Jake"/>
            <Tweet username="JakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
            <Tweet username="MakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
            <Tweet username="CakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
            <Person name="Jake" age="28" hobbies={['Piano', 'Skydiving', 'Volunteering']}/>
            <Person name="CupJakes" age="17" hobbies={['School', 'Soccer', 'Comedy']}/>
            <Person name="MichaelangeJake" age="747" hobbies={['Paint', 'Sculpt', 'Stare at Ceilings']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))