import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// css
import './styles/css/index.css'

// others
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
