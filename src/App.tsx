import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './views/static/header/Header';
import Footer from './views/static/footer/Footer'
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Events = lazy(() => import('./pages/Events/Events'))
const Home = lazy(() => import('./pages/home/Home'))
const Radio = lazy(() => import('./pages/Radio/Radio'))
const Login = lazy(() => import('./views/login/Login'));

function App() {


  return (
    <div className="Main-kwd">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/eventos" element={<Events />}></Route>
          <Route path="/contato" element={<Contact />}></Route>
          <Route path="/radio" element={<Radio />}></Route>

          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
