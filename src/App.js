import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Popup from './components/Popup';

function App() {


  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/popup' element={<Popup />} />

    </Routes>
  );
}

export default App;
