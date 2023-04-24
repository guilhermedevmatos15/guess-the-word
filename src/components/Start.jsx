import React, {useState} from 'react';

// css
import '../styles/css/Start.css'

const Start = props => {

   return (
      <div className='Start'>
         <h1>Está preparado para o jogo?</h1>
         <p>Clique no botão para começar a jogar!</p>
         <button className='b-jogar' onClick={(e) => {props.onClick()}}>Jogar!</button>
      </div>
   );
}

export default Start;