import React, { useContext } from 'react'
import { AppContext } from '../App';

function Finish() {
    const { gameOver, setGameOver, correctWord } = useContext(AppContext)
    return (
        <div >
            <h2>{gameOver.guessedWord ? "Word Correctly Guessed" : "You failed"}</h2>
            <h1>Correct Word:{correctWord}</h1>
        </div>
    )
}

export default Finish