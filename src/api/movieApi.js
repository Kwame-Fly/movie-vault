import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};

export const fetchMoviesByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}?s=${category}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};