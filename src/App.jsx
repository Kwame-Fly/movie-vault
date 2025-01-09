import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
