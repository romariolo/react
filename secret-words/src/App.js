
//CSS
import "./App.css"

//React
import {useCallback, useEffect, useState} from 'react'

//data
import { wordsList } from "./data/words"

//components
import StartScreen from './components/StartScreen';
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
]

const guessesQty = 3




function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, SetGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() =>{
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)
    return {word, category}
  },[words]);

  //Starting secrets words
  const startGame = useCallback(() =>{
    //clear all letters
    clearLetterStates();
  //pick word and pick category
  const {word, category} = pickWordAndCategory();

  //Create an array of letters
  let wordLetters = word.split("")
  wordLetters = wordLetters.map((l) => l.toLowerCase())

  //fill states
  setPickedWord(word)
  setPickedCategory(category)
  setLetters(wordLetters)

  console.log(wordLetters)

  console.log(word, category)

    setGameStage(stages[1].name)
  },[pickWordAndCategory]);

  //Processing letter unput
  const verifyLetter = (letter) =>{

    const normalizedLetter = letter.toLowerCase();

    //Check if letter was already been utilized
    if(guessedLetters.includes(normalizedLetter) || (wrongLetters.includes(normalizedLetter))){
      return
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetter) => [
        ...actualGuessedLetter,
        normalizedLetter
      ]);
    }else{
      setWrongLetters((actualWrongLetter) => [
        ...actualWrongLetter,
        normalizedLetter
      ]);
      SetGuesses((actualGuesses) => actualGuesses - 1)
    }

    
  }

  const clearLetterStates = () =>{
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check loos condition
  useEffect(() =>{
    //reset all state

    if(guesses <= 0){
      setGameStage(stages[2].name)
    }

  },[guesses])

  //Check win condition
  useEffect(() =>{

    const uniqueLetters = [...new Set(letters)]
    console.log(uniqueLetters)

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      //add score
      setScore((actuaScore) => actuaScore += 100);
     
      //restart game with a new word
      startGame();

    }
 
  },[guessedLetters, letters, startGame])

  //Restarts the game
  const retry = () =>{
    clearLetterStates();
    setScore(0)
    SetGuesses(guessesQty)
    setGameStage(stages[0].name)
  }



  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}
       pickedWord={pickedWord}
       pickedCategory={pickedCategory}
       letters={letters} 
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses} 
       score={score}/>}
      {gameStage === "end" && <GameOver retry={retry} score={score}/>}
    
   
    </div>
  );
}

export default App;
