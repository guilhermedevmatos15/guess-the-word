import React, { useState } from 'react';

// Components
import Game from './components/Game';
import Start from './components/Start';

// css
import './styles/css/App.css'

// images

const App = () => {

   let [stage, setStage] = useState('start');
   function handleClickState() {
      setStage('game');
   }

   return (
      <div className='App'>
         {stage==='start' && (<Start onClick={handleClickState} />)}
         {stage==='game' && <Game />}
         <footer>Desenvolvido por &copy;Guilherme Ferreira</footer>
      </div>
   );
};

export default App;
