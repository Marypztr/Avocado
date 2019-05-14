import React from 'react';
import {Link, Router} from "react-router-dom"
import './App.css';
import logo3 from "../src/images/logo3.png"

function App() {
  return (
    <div className="App">
        <Link>
         <img src={logo3} style= {{width: 100}} alt="logo2"/>
        </Link>
    </div>
  );
}

export default App;
