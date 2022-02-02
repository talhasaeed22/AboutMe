import React from 'react';
import './Home.css';
import pic from './img/Hnet.com-image .jpg'
function Home(props) {
  return <div>
    <div id="cont">
        <div className="inside-header">
            <div className="box" id="name">
                <h1>Muhammad Talha Saeed</h1>
                <p style={{color:props.mode === 'light'?'black':'white'}}>You can't go back and change the beginning, but you can start where you are
                    and change the ending</p>
            </div>
            <div className="box" id="image">
                <img src={pic} alt="Profile"/>
            </div>
        </div>
        <div className="content">
            <div className="sections">
                <div className="sec" id="section1">
                    <h1>INTERESTS</h1>
                    <p>I have many interest like travelling, playing games indoor and outdoors. Travelling around
                        the world is the main interest I can list out</p>
                </div>
                <div className="sec" id="section2">
                    <h1>HOBBIES</h1>
                    <p>My Hobbies are to travell all over the world. I love to play games which can either be
                        outdoors or indoors. </p>
                </div>
            </div>
            <div className="sections">
                <div className="sec" id="section3">
                    <h1>EDUCATION</h1>
                    <p>I am a Student of Computer Science studying in Comsats University. I have cleared my
                        matriculation and Intermediate level education</p>
                </div>
                <div className="sec" id="section4">
                    <h1>EXPERIENCES</h1>
                    <p>As a student of Computer Science, I have studied many languages and worked in many project
                    </p>
                </div>
            </div>
        </div>
    </div>

  </div>;
}

export default Home;

