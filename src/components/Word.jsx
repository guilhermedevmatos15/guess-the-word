import React, {useState} from 'react';
import PropTypes from "prop-types";

// components
import '../styles/css/Word.css'

const Word = props => {

   const {rightLetters} = props;

   function renderClassName(letter) {
      let result = '';
      rightLetters.forEach((letterTrue) => {
         if (letter === letterTrue) {
            result = 'active';
         }
      });

      return result ? result : '';
   }

   function renderWord(word) {
      word = String(word).split('');

      return word.map((letter, index) => {
         return (
            <span 
               className={`letter ${renderClassName(letter)}`}
               key={`${letter}_${index}`}
            >
               {letter}
            </span>
         );
      });
   }

   return (
      <div className='Word'>
         {renderWord(props.word)}
      </div>
   );
}

Word.prototype = {
   word: PropTypes.string.isRequired,
}

export default Word;