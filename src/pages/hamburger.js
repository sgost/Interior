import React, { useState } from 'react';
import "../styles/ham.scss"

function Hamburger(){
     const [status, setStatus] = useState('close');
  return (
    <div id="toggle">
      <div className="BurgerMenu__container" role="presentation" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
        <i className={status}></i>
        <i className={status}></i>
      </div>
   </div>
  )
}
export default Hamburger;