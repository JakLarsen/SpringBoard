import React from 'react'
import fruits from '../component-data/fruits'
import { choice, remove } from './helpers'

const FruitConvo = ({fruits}) =>{
    const ourChoice = choice(fruits)


    return(
        <>
            <h1>How to get this going in the right order, hmm hmm</h1>
            <h1>Should be all fruits. Learn to configure async await in React.{fruits}</h1>
            <h1>I'd like a {ourChoice}, please!</h1>
            <h1>Ok, here's a {ourChoice}.</h1>
            <h1>Delicious, may I have another?</h1>
            <h1>Removing your: {remove(fruits, ourChoice)}</h1>
            <h1>Fruits Left: {fruits}</h1>
            <h1>Sorry, we only had 1 {ourChoice}.</h1>
        </>
    )
}

export default FruitConvo