import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'; 
import Home from './pages/Home';
import Genres from './pages/Genres';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar must be included here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />    
        </Routes>
      </div>
    </Router>
  );
}

export default App;

