import React from 'react';

// css
import '../styles/css/Modal.css'

const Modal = (props) => {
   const active = props.active;

   return (
      <div className='Modal'>
         {active && (
            <div>
               {props.children}
            </div>
         )}
      </div>
   );
}

export default Modal;
