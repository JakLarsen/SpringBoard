import React, {useState} from 'react'


const useFlip = (initialState = false) => {
    const [isFlipped, setIsFlipped] = useState(initialState)

    const toggleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return [isFlipped, toggleFlip]
}

export default useFlip