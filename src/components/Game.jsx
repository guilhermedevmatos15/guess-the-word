// components + hooks
import React, {useState} from 'react'
import Word from './Word';

// data
import words from '../data/words';

// css

// images

const Game = (props) => {

   let [numeroAleatorio, setNumeroAleatorio] = useState(getRandomIntInclusive(0, words.length - 1));
   let [dica, setDica] = useState(words[numeroAleatorio].dica);
   let [tentativas, setTentativas] = useState('');


   function getRandomIntInclusive(min=0, max=0) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   return (
      <div className='Game'>
         <h1>Adivinhe a palavra:</h1>
         <h2>Dica sobre a palavra: <span>{dica}</span></h2>
         <p>Você ainda tem {tentativas} tentativa{`(s).`}</p>
         <Word word={words[numeroAleatorio].word} />
         <form>
            <label htmlFor='i-letter'>Tente adicinhar uma letra da palavra:</label>
            <input type="text" name='i-letter' id='i-letter' maxLength={1} minLength={1} required />
            <button className='b-jogar'>{`jogar!`.toUpperCase()}</button>
         </form>
         <p>Letras já utilizadas: </p>
      </div>
   );
}

export default Game;