import './Education.css'
import React from 'react';
import school from './img/school.jpg';
import college from './img/college.jpg';
import university from './img/university.jpg';

function Education() {
  return(
      <>
      <div id="edu_right">
                <h1 className="p-heading">EDUCATION</h1>
            <div className="content">
                <div className="text">
                    <h2 className="sec-heading">MATRIC</h2>
                    <p>
                         <li>I have done Matric from The Educators School.</li>
                         <li>I have studied Maths and Science from school.</li>
                         <li>I have passed Matric with 90% plus marks and performed well in school</li>
                    </p>
                </div>
                <div className="image">
                    <img src={school} alt="School"/>
                </div>
            </div>
            <div className="content">
                <div className="text">
                    <h2 className="sec-heading">INTERMEDIATE</h2>
                    <p>
                         <li>I have done Intermediate from Punjab College.</li>
                         <li>I have studied Maths and Science from College.</li>
                         <li>I have passed College with 83% plus marks</li>
                    </p>
                </div>
                <div className="image">
                    <img src={college} alt="College"/>
                </div>
            </div>
            <div className="content">
                <div className="text">
                    <h2 className="sec-heading">BACHELOR</h2>
                    <p>
                         <li>I am doing my bachelor from Comsats University Islamabd.</li>
                         <li>I have selected Computer Science Degree.</li>
                         <li>i Have completed half of my degree with 3.3 plus CGPA</li>
                    </p>
                </div>
                <div className="image">
                    <img src={university} alt="University"/>
                </div>
            </div>
        </div>
      </>
  );
}

export default Education;
