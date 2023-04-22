// Components
import { useState } from 'react';
import Game from './components/Game';

// css
import './styles/css/App.css'

// images

const App = () => {

   let [pontuation, setPontuation] = useState(0);

   return (
      <>
         <p className='pontuation'>{pontuation}</p>
         <Game />
         <footer>Desenvolvido por &copy;Guilherme Ferreira</footer>
      </>
   );
};

export default App;
