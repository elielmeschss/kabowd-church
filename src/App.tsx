import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/static/header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import Home from './pages/home/Home';
import Radio from './pages/Radio/Radio';

function App() {
  return (
    <div className="Main-kwd">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/eventos" element={<Events />}></Route>
          <Route path="/contato" element={<Contact />}></Route>
          <Route path="/radio" element={<Radio />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
