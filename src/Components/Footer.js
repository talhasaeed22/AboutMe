import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
      <>
        <footer className="footer">
        <div id="footer2">
            <form action="" className="form" id="form1">
                <h1>Contact Me</h1>
                <input type="text" id="Name" placeholder="Enter Name Here"/>
                <input type="email" id="signUpEmail" placeholder="Enter Email Here"/>
                <input type="number" id="phonenumber" placeholder="Enter Phone Number"/>
                <textarea style={{padding:'24px', backgroundColor:props.mode === 'light'?'white':'grey'}} name="" id="" cols="30" rows="5"
                    placeholder="Enter Your Message Here"></textarea>
                <button className="btn footerButton">SUBMIT!</button>
            </form>
        </div>
    </footer>
      </>
  );
}

export default Footer;
