import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Hobbies from './Components/Hobbies';
import Interests from './Components/Interests';
import Education from './Components/Education';
import Experience from './Components/Experience';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  let toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#242323';
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#d3c4a8';
    }
  }
  return (
    <>
      <Router>
      <Header/>
      <div className="main-container">
        <div id="left">
          <Navbar mode={mode} toggleMode={toggleMode} />
        </div>
        <div id="right" style={{backgroundColor:mode ==='light'?'white':'#383636', borderRadius: '23px'}}>
          <Routes>
            <Route path="/" element={<Home mode={mode}/>}> 
            </Route>
            <Route path="/Hobbies" element={<Hobbies/>}>
            </Route>
            <Route path="/Interests" element={<Interests/>}>
            </Route>
            <Route path="/Education" element={<Education/>}>
            </Route>
            <Route path="/Experience" element={<Experience/>}>
            </Route>
            
          </Routes>

        </div>
      </div>
      <Footer mode={mode}/>
      </Router>
    </>    
  );
}

export default App;

