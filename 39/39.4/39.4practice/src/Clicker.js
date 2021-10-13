import React from 'react'

const fireLasers = (e) =>{
    console.log(e)
    console.log("LASERS AWAY PEW PEW PEW")
}

const Clicker = () => {
    return (
        <button onClick={fireLasers}>Click me!</button>
    )
}

const MouseOver = () =>{
    return(
        <button onMouseOver={fireLasers}>MosuieOverSPELLING IS HARD</button>
    )
}

const Scroll = () =>{
    return(
        <>
            <textarea onScroll={fireLasers} rows="2" value="
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd
                asdasd asdasd asd asdasdasd asd">
            </textarea>     
        </>
    )
}

export {Clicker, MouseOver, Scroll};

