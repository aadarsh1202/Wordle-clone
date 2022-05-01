import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { gridDefault, selectWordList } from './components/Words';
import React, { useState, createContext, useEffect } from "react";
import Finish from './components/Finish';

export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(gridDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordList, setWordList] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    selectWordList().then((words) => {
      setWordList(words.wordList)
      setCorrectWord(words.latestWord)
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newGrid = [...grid]
    // newGrid[0][0] = keyVal
    // console.log(currAttempt.attempt);
    // console.log(currAttempt.letterPos)
    newGrid[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setGrid(newGrid);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newGrid = [...grid]
    newGrid[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setGrid(newGrid)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  };
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = ""
    for (let i = 0; i < 5; i++) {
      currWord += grid[currAttempt.attempt][i];
      // console.log(currWord.toLowerCase())
      // console.log(wordList)
      // let ans = wordList.has(currWord.toLowerCase() + "\r")
      // console.log(ans)
    }


    if (wordList.has(currWord.toLowerCase() + "\r")) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found");
    }
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true })
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <div className="display">
        <AppContext.Provider value={{
          grid, setGrid, currAttempt,
          setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord, disabledLetters
          , setDisabledLetters, gameOver, setGameOver
        }}>
          <Grid />
          {gameOver.gameOver ? <Finish /> : <Keyboard />}
        </AppContext.Provider>
      </div>
    </div >
  );
}

export default App;
