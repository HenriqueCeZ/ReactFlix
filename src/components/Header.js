import React from "react";
import './Header.css';

export default ({black})=>{
    return (
        <header className={black ? 'black' : ''}>
               <div className="header--Logo">
                   <a href="/">
                       <img src="https://psfonttk.com/wp-content/uploads/2020/09/Netflix-Logo-jpg-1024x1024.jpg" alt="Netflix" />
                   </a>
                   
               </div>
               <div className="header--User">
                   <a href="/">
                       <img src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png" alt="usuario" />
                   </a>
                   
               </div>
        </header>
    );
}
