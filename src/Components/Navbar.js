import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
  <>
        <div style={{backgroundColor:props.mode ==='light'?'#d35b4e':'#042743', borderRadius: '23px'}} id="navBaar">
            <nav>
                <ul>
                    <li> <Link className="active" to="/">HOME</Link></li>
                    <li> <Link to="/Hobbies">HOBBIES</Link></li>
                    <li> <Link to="/Interests">INTERESTS</Link></li>
                    <li> <Link to="/Education">EDUCATION</Link></li>
                    <li> <Link to="/Experience">EXPERIENCES</Link></li>
                        <label class="switch">
                            <input onClick={props.toggleMode} type="checkbox" unchecked/>
                            <span class="slider round"></span>
                        </label>
                    <label style={{color:'white'}} for="pet">{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
                </ul>
            </nav>
        </div>
  </>
  );
}

