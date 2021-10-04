import '../css/Pokecard.css'



const Pokecard = ({name, type, base_experience, img}) =>{

    console.log(`In Pokecard, name: ${name}`)
    return (
        <div className="Pokecard-card">
            <h3 className="Pokecard-name">{name}</h3>
            <img className="Pokecard-img" src={img} alt=""></img>
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard