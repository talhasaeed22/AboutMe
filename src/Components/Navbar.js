import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
                <nav>
                    <ul>
                        <li> <Link to="/">HOME</Link></li>
                        <li> <Link to="/Hobbies">HOBBIES</Link></li>
                        <li> <Link to="/Interests">INTERESTS</Link></li>
                        <li> <Link to="/Education">EDUCATION</Link></li>
                        <li> <Link to="/Experience">EXPERIENCES</Link></li>
                        <div className="darkmode">
                            <div>
                                <label class="switch">
                                    <input onClick={props.toggleMode} type="checkbox" unchecked />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div style={{diplay:'flex', alignItems:'center'}}>
                                <label id="dark-heading" style={{ color: 'white', margin:'10px 0px' }} >{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                            </div>

                        </div>
                    </ul>
                </nav>
            
        </>
    );
}

