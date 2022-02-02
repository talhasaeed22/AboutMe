import React from 'react';
import './Header.css';
function Header() {
  return <div>
        <header className="header">
        <div id="logo">
            <h2 style={{color:'white'}}>PERSONAL</h2>
        </div>
        <div id="icons">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/talha.saeed.1023"><i className="fa fa-facebook-square"
                    aria-hidden="true"></i> </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/talha_saeed2.2/"><i className="fa fa-instagram"
                    aria-hidden="true"></i> </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/login"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
        </div>
    </header>      
  </div>;
}

export default Header;

