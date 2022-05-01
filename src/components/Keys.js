import React, { useContext } from 'react'
import { AppContext } from '../App';

function Keys({ keyVal, bigKey, disabled }) {
    const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        }
        else if (keyVal === "DELETE") {
            onDelete();
        }
        else {
            onSelectLetter(keyVal)

            // if (gameOver.gameOver) return;
            // if (keyVal === "ENTER") {
            //     onEnter();
            // } else if (keyVal === "DELETE") {
            //     onDelete();
            // } else {
            //     onSelectLetter(keyVal);
            // }
        }
    };
    return (
        <div className='key' id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
            {keyVal}
        </ div>
    )
}

export default Keys