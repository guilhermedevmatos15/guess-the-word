import React, {useState} from 'react';
import PropTypes from "prop-types";

const Word = (props) => {

   function renderWord(word) {
      word = String(word).split('');
      return word.map((letter, index) => {
         return (
            <span className='letter' key={`${letter}_`+index}>
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