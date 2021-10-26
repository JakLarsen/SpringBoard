import React, {useState} from 'react'
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
   
    //Create state for cards, setCards
    //Create a function to add a card
    //Return our cards and function to add cards

    const [cards, setCards] = useState([])

    const addCard = async () => {
        const response = await axios.get(url)
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }

    return [cards, addCard]
}

export default useAxios