import React from 'react';
import './Experience.css'
function Experience() {
  return (
      <>
      <div id="exp_right">
            <h1 className="p-heading">
                EXPERIENCES
            </h1>
            <div className="content">
                <h2 className="sec-heading">Working in Different Languages</h2>
                <p className="para">I have worked in many languages. I am an IT Student studying in comsats Univeristy Islamabad. I have completed almost half my degree and created many projects in all Semesters. <br/> I have approximately complete grip over JAVA language. <br/> I can create websites and web application on REACT as well as simple HTML, CSS, JAVASCRIPT. <br/> MYSQL and monoDB are the languages on which i can work on </p>
                <div className="progress">
                  <div className="progress-bar" style={{width:'70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">PYTHON 70%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar"  style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">REACT 80%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar"  style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">DATABASE 100%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar" style={{width:'90%'}}>JAVA 90%</div>
                </div>
            </div>
        </div>
      </>
  );
}

export default Experience;

