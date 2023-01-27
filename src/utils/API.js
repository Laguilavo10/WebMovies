const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/'

export const API_ENDPOINTS = {
  genre: `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
}


