




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


const App = () =>{
    return(
        <div>
            <FirstComponent msg="My very first component"/>
            <NamedComponent name="Jake"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))