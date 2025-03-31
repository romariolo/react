import { useState, useRef } from "react"
import "./Game.css"

const Game = ({verifyLetter,
               pickedWord,
               pickedCategory,
               letters,
               guessedLetters,
               wrongLetters,
               guesses,
               score
}) => {

  const [letter, SetLetter] = useState("");
  const letterInputRef = useRef(null);


  const handleSubmit = (e) =>{
    e.preventDefault();

    verifyLetter(letter);

    SetLetter("");

    letterInputRef.current.focus();
  }
  return (

   

    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a Palavra</h1>
      <h3 className="tip">Dica sobre a Palavra: <span>{pickedCategory}</span></h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>(
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter" > {letter} </span>
          ) : (
            <span key={i} className="blankSquare" > </span>
          )
        ))}


      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit} >
          <input type="text" name="letter" maxLength="1" required onChange={(e) => SetLetter(e.target.value)} 
          value={letter}
          ref={letterInputRef}
          />
          <button>Jogar </button>
        </form>
       
      </div>
      <div className="wrongLetterContainer">
        <h2>Letras já usadas</h2>
        {wrongLetters.map((letter, i) => (
          <span key={i} >{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game
