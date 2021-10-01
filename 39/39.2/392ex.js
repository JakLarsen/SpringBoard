




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


const App = () =>{
    return(
        <div>
            <FirstComponent msg="My very first component"/>
            <NamedComponent name="Jake"/>
            <Tweet username="JakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
            <Tweet username="MakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
            <Tweet username="CakeLarsen11" name="Jake" date="10/1/21" msg="My first tweet"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))