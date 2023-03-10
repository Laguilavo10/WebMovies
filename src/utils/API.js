export const API_KEY = `?api_key=${import.meta.env.VITE_API_KEY}`
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAJE = 'es-CO'

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/'
export const WIDTH_URL_IMG = {
  w300: 'w300',
  w500: 'w500',
  original: 'original',
}

//https://api.themoviedb.org/3/movie/315162/similar?api_key=28b214b65e7b229f965d281328f405d2&language=es-CO&page=1
export const API_ENDPOINTS = {
  trending:`${BASE_URL}/trending/movie/day${API_KEY}&language=${LANGUAJE}`,
  genres: `${BASE_URL}/genre/movie/list${API_KEY}&language=${LANGUAJE}`,
  filterByGenres:`${BASE_URL}/discover/movie${API_KEY}`, 
  searched: `${BASE_URL}/search/movie${API_KEY}&page=1&region=CO&language=${LANGUAJE}`,
  related: `${BASE_URL}/movie`
}




