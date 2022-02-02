import React from 'react';
import bike from './img/bike.jpg'
import train from './img/train.jpg'
import './Hobbies.css'

function Hobbies() {
  return <div>
      <div id="cont">
            <h1 className="p-heading">TRAVELING</h1>
            <div className="inside-header">
                <div className="box" id="name">
                    <h1 className="sec-heading">Traveling through Train</h1>
                    <p style={{color:'black'}}>I love to travel over the world. From childhood, this is my dream to travel over the world. I used to travel many places in Pakistan with family and sometimes with friends. I have experienced many mode of transport. But my favourite is traveling thorugh Trains</p>
                </div>
                <div className="box" id="image">
                    <img src={train} alt="Train"/>
                </div>
            </div>
            <div className="inside-header">
                <div className="box" id="name">
                    <h1 className="sec-heading">Bike Riding</h1>
                    <p style={{color:'black'}}>Riding takes effort, especially compared to driving in a car. Not only is it a physical and mental workout, it is considered most exciting way of traveling. Bike Riding is though considered a dangerous way of travel, but for those haivng passion and love of riding, it is nothing. My Hobbies includes bike riding. I love to ride bike all over the Pakistan.</p>
                </div>
                <div className="box" id="image">
                    <img src={bike} alt="Bike"/>
                </div>
            </div>
        </div>
  </div>;
}

export default Hobbies;
