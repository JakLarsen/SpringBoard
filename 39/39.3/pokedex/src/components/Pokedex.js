import React from 'react'
import Pokecard from './Pokecard'
import '../css/Pokedex.css'


const Pokedex = ({pokemon}) =>{
    return (
        <div className="Pokedex-container">
            {pokemon.map(p=>(
                <Pokecard 
                key={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
                img={p.img}
                />
            ))}
        </div>
    )
}

export default Pokedex