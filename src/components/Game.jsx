// components + hooks
import React, { useState } from 'react';
import Word from './Word';
import Modal from './Modal';
// import LyricsUsed from './LyricsUsed';

// data
import words from '../data/words';

// css
import '../styles/css/Game.css';

// images

const Game = (props) => {
   let [randomNumber] = useState(getRandomIntInclusive(0, words.length - 1))
   let [myWord] = useState(words[randomNumber].word.toUpperCase());
   let [myTip] = useState(words[randomNumber].dica);
   let [score, setScore] = useState(0);
   let [attempts, setAttempts] = useState(3);
   let [inputValue, setInputValue] = useState('');
   let [gameOver, setGameOver] = useState(false);
   let [gameWinner, setGameWinner] = useState(false);
   let [isWordComplete, setIsWordComplete] = useState(false);
   let [usedLetters, setUsedLetters] = useState([]);
   let [rightLetters, setRightLetters] = useState([]);

   function getRandomIntInclusive(min=0, max=0) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function checkIfWon() {
      const word = myWord.split('');
      for (let i = 0; i < word.length; i++) {
         if (!rightLetters.includes(word[i])) {
            return false;
         }
      }
      return true;
   }

   function clickButton() {
      const word = myWord.split('');

      // Se o usuário acertou ou não
      let cont = 0;
      word.forEach((letter) => {
         if (letter === inputValue) {
            cont++;
         }
      });

      if (cont === 0) {
         error(inputValue);
      } else {
         success(inputValue, cont);
         if (checkIfWon()) {
            setGameWinner(true);
         }
      }
   }

   function success(letterInput, scoreCurrent) {
      letterInput = letterInput.toUpperCase();

      if (!haveYouTriedLyrics(letterInput)) {
         setScore(score + scoreCurrent);
         addLetterForUsed(letterInput);
         // adicionamos a letra a certa
         const newRightLetters = [...rightLetters, letterInput.toUpperCase()];
         setRightLetters(newRightLetters);
         // verificamos se a palavra está completa
         const word = myWord.split('');
         if (newRightLetters.length === word.length) {
            setIsWordComplete(true);
         }
      }
   }

   function error(letterInput) {
      if (!haveYouTriedLyrics(letterInput)) {
         addLetterForUsed(letterInput);
         decreaseAttempts();
      }
   }

   function addLetterForUsed(letter) {
      letter = letter.toUpperCase();

      const newUsedLetters = [...usedLetters, letter];
      setUsedLetters(newUsedLetters);
   }

   function haveYouTriedLyrics(letter) {
      letter = letter.toUpperCase();

      if (usedLetters.includes(letter)) {
         return true;
      } 
      return false;
   }

   function decreaseAttempts() {
      if (attempts === 1) {
         setGameOver(true);
      } else {
         setAttempts(attempts - 1);
      }
   }


   return (
      <div className="Game">
         <p className="pontuation">
            {score}/{myWord.length}
         </p>
         <h1>Adivinhe a palavra:</h1>
         <h2>
            Dica sobre a palavra: <span>{myTip}</span>
         </h2>
         <p>Você ainda tem {`${attempts} tentativa(s)`}</p>
         <Word word={myWord} rightLetters={rightLetters}/>
         <form>
            <label htmlFor="i-letter">
               Tente adivinhar uma letra da palavra:
            </label>
            <input
               type="text"
               name="i-letter"
               id="i-letter"
               maxLength={1}
               minLength={1}
               required
               onChange={(e) => {
                  setInputValue(e.target.value.toUpperCase());
               }}
            />
            <button
               className="b-jogar"
               type="button"
               onClick={(e) => {clickButton()}}
            >
               Jogar!
            </button>
         </form>
         <p>Letras já usadas: <br/>{usedLetters.join(', ')}</p>



         {gameOver && 
         <Modal setActive={setGameOver} active={gameOver}>
            <h2>Game Over!</h2>
            <p>Recarregue a página para jogar novamente!</p>
         </Modal>}
         {isWordComplete && 
         <Modal setActive={setGameWinner} active={gameWinner}>
            <h2>Você venceu!!!</h2>
            <p>Recarregue a página para jogar novamente!</p>
         </Modal>}
      </div>
   );
};

export default Game;
