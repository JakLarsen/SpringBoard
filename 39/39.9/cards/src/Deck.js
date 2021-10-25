import React, {useState, useEffect, useRef} from 'react'
import { v4 as uuid } from 'uuid';
import axios from 'axios'
import Card from './Card'
import './Deck.css'







const Deck = () => {

    const testCard = {value: 5, suit: 'HEARTS'}
    const [cards, setCards] = useState([])
    const [deck, setDeck] = useState(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    const [deckID, setDeckID] = useState("")
    const [isDrawing, setIsDrawing] = useState(false)
    const timerID = useRef()
    const [startStop, setStartStop] = useState('Start')

    const createDeck = async () => {
        let ourDeck = await axios.get(deck)
        setDeckID(ourDeck.data.deck_id)
    }
    
    useEffect(()=>{
        createDeck();
    },[])

    const draw = async () => {

        let res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        console.log(res.data.remaining)
        if (res.data.remaining == 0){
            createDeck()
            setCards([])
            return alert('No cards left.')
        }
        else{
            const ourCard = res.data.cards[0]
            let newCard = {value: ourCard.value, suit: ourCard.suit} 
            setCards(cards=>[...cards, newCard])     
        }

    }

    const start = () =>{
        timerID.current = setInterval(draw, 1000)
        return () => {
            clearInterval(timerID.current)
        }
    }

    const stop = () => {
        clearInterval(timerID.current)
    }

    const handleStartStop = () => {
        if (isDrawing){
            setIsDrawing(!isDrawing)
            setStartStop('Start')
            stop()
        }
        else{
            setIsDrawing(!isDrawing)
            setStartStop('Stop')
            start()
        }
    }


    return (
        <div className="Deck">
            <button onClick={draw}>Draw</button>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={handleStartStop}>Dual: {startStop}</button>
            <div className="Deck-card-con">
                {cards.map(card => (
                    <Card key={uuid()}value={card.value} suit={card.suit}/>
                ))}
            </div>
        </div>
    )
}

export default Deck