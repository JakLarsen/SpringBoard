




//Newer functional components with hooks
const Dion = () =>{
    return <img id="dion-img" src="https://www.greekboston.com/wp-content/uploads/2017/04/Dionysus.jpg"/>
}

//Traditional Class-based component
class Zeus extends React.Component{
    render(){
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/1200px-Jupiter_Smyrna_Louvre_Ma13.jpg"/>
    }
}

//Curly braces escape JSX to embedd JS variables
const RandomNum = () =>{
    const rand = Math.floor(Math.random() * 10) + 1
    return <h3>{rand}</h3>
}



const App = () =>{
    return (
        <div>
            <RandomNum/>
            <RandomNum/>
            <RandomNum/>
            <Dion/>
            <Zeus/>
            <Dion/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))