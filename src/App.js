import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import React from 'react';
import Home from './components/Home';
import Booking from './components/Booking'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Nav />
    <Header/>
    <Main/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./booking" element={<Booking />} />
    </Routes>
    <Footer />
</Router>
  );
}

export default App;
