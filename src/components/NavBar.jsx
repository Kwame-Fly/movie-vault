import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "801afbab";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout;

  const navigate = useNavigate();

  const handleGenreClick = async (genre) => {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${genre}`);
      const movies = response.data.Search || [];
      navigate('/genres', { state: { genre, movies } });
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      navigate('/genres', { state: { genre, movies: [] } });
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setIsDropdownOpen(false), 300); // Add a delay before closing
  };

  return (
    <nav className="bg-blue-300 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Movie-Vault
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-blue-700 cursor-pointer">Genres</span>
            {isDropdownOpen && (
              <div className="absolute bg-white text-gray-800 rounded shadow-lg mt-2 z-10">
                {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'].map((genre) => (
                  <div
                    key={genre}
                    onClick={() => handleGenreClick(genre)}
                    className="p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {genre}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-blue-700">About</Link>
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




