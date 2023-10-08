import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Ratings from './components/Ratings';
import About from './components/About';
import MenuBar from './components/MenuBar';
import Contact from './components/Contact';

function App() : ReactElement {
  return (
    <>
      <MenuBar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/ratings" element={<Ratings/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
