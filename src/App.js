import './App.css';
import Main from './components/Main';
import Footer from './components/Footer'
import Menu from './components/Menu'
import Nav from './components/Nav';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Nav/>
    <Main/>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
