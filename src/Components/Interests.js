import React from 'react';
import './Interests.css'
import cricket from './img/cricket.jpeg';
import library from './img/library.jpg';

function Interests() {
  return (
      <>
      <div id="cont">
            <h1 class="p-heading">INTERESTS</h1>
            <div class="inside-header">
                <div class="box" id="name">
                    <h1 class="sec-heading">Sports-Cricket</h1>
                    <p style={{color:'black'}}>Cricket is my favourite Sport. It is one of the most loved sports. It is the most exciting game in our country and is also played in many countries worldwide. Cricket is one of the most popular games played in Pakistan for children and adults. It is a fascinating game in our country, and it is played in many countries of the world. From my childhood I used to play a lot of Cricket</p>
                </div>
                <div class="box" id="image">
                    <img src={cricket} alt="Cricket"/>
                </div>
            </div>
            <div class="inside-header">
                <div class="box" id="name">
                    <h1 class="sec-heading">Books Reading</h1>
                    <p style={{color:'black'}}>Books are referred to as a man’s best friend. They are very beneficial for mankind and have helped it evolve. There is a powerhouse of information and knowledge. Books offer us so many things without asking for anything in return. So I used to read many books in my college life and still I am continuing this interest</p>
                </div>
                <div class="box" id="image">
                    <img src={library} alt="Library"/>
                </div>
            </div>
        </div>
      </>
  );
}

export default Interests;
