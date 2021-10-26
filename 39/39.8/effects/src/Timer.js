import React, {useState, useEffect} from 'react'

const Timer = () => {


    const [seconds, setSeconds] = useState(0)


    //Will render once after first render if we use ,[] for dependencies
    useEffect(()=>{
        const id = setInterval(()=>{
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => clearInterval(id)
    }, [])
    


    return <h1>{seconds}</h1>
}

export default Timer;