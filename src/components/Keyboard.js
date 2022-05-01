import React, { useEffect, useCallback, useContext } from 'react';
import Keys from './Keys';
import { AppContext } from '../App';
import classes from './CSS/Keyboard.module.css'


function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onSelectLetter, onEnter, onDelete, disabledLetters } = useContext(AppContext);

    const handleKeyboard = useCallback(
        (event) => {
            if (event.key === "Enter") {
                onEnter()
            }
            else if (event.key === "Backspace") {
                onDelete()
            }
            else {
                keys1.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key)
                    }
                })
                keys2.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key)
                    }
                })
                keys3.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key)
                    }
                })
            }
        })


    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard]);

    return (
        <div className={classes.keyboard} onKeyDown={handleKeyboard}>
            <div className={classes.line1}>
                {keys1.map((key) => { return <Keys keyVal={key} disabled={disabledLetters.includes(key)} />; })}
            </div>
            <div className={classes.line2}>
                {keys2.map((key) => { return <Keys keyVal={key} disabled={disabledLetters.includes(key)} />; })}
            </div>
            <div className={classes.line3}>
                <Keys keyVal={"ENTER"} bigKey />
                {keys3.map((key) => { return <Keys keyVal={key} disabled={disabledLetters.includes(key)} />; })}
                <Keys keyVal={"DELETE"} bigKey />
            </div>
        </div>
        // <div>Keyboard</div>
    )
}

export default Keyboard