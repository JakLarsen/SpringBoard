import React, {useState} from 'react'
import MainForm from './MainForm'
import Story from './Story'
import { v4 as uuid } from 'uuid';






const Madlibs = () => {

    const INITIAL_STATE = [
        {
            id: uuid(),
            noun1: "Penguin",
            noun2: "Butterfly",
            adjective: "Regal",
            color: "Purple"
        }
    ]

    const [stories, setStories] = useState(INITIAL_STATE)

    const addStory = (story) => {
        setStories(stories => [...stories, story ])
    }

    const clearStories = () => {
        setStories(INITIAL_STATE)
    }

    return (
        <div>
            <h1>MADLIBS</h1>
            <button onClick={clearStories}>Clear Stories</button>
            <MainForm addStory={addStory}/>
            <h1>Your Stories</h1>
            {stories.map(story => 
                <Story key={story.id} id={story.id} noun1={story.noun1} noun2={story.noun2} adjective = {story.adjective} color={story.color}/>
            )}
        </div>
        
    )
}

export default Madlibs