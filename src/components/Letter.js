import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import classes from './CSS/Letter.module.css'


function Letter({ letterPos, attemptNo }) {
    const { grid, correctWord, currAttempt, setDisabledLetters } = useContext(AppContext)
    const letter = grid[attemptNo][letterPos]
    const correct = correctWord.toUpperCase()[letterPos] === letter
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
    const letterState = currAttempt.attempt > attemptNo && (correct ? "correct" : almost ? "almost" : "error");
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            // console.log(letter);
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);
    return (
        <div className={classes.letter} id={letterState}>
            {letter}
        </div>
    )
}

export default Letter