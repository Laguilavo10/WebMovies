const API_KEY = `?api_key=${import.meta.env.VITE_API_KEY}`
const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300'

export const API_ENDPOINTS = {
  trending:`${BASE_URL}/trending/movie/day${API_KEY}`,
  genres: `${BASE_URL}/genre/movie/list${API_KEY}&language=en-US`,
  filterByGenres:`${BASE_URL}/discover/movie${API_KEY}`, 
  searched: `${BASE_URL}/search/movie${API_KEY}`,
}

// https://api.themoviedb.org/3/search/movie?api_key=28b214b65e7b229f965d281328f405d2&query=botas&page=1









// https://api.themoviedb.org/3/discover/movie?api_key=28b214b65e7b229f965d281328f405d2&with_genres=28&language=es-CO&region=CO


