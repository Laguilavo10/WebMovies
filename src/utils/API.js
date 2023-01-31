const API_KEY = `?api_key=${import.meta.env.VITE_API_KEY}`
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAJE = 'es-CO'
// export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300'
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/'
export const WIDTH_URL_IMG = {
  w300: 'w300',
  w500: 'w500',
  original: 'original',
}


export const API_ENDPOINTS = {
  trending:`${BASE_URL}/trending/movie/day${API_KEY}&language=${LANGUAJE}`,
  genres: `${BASE_URL}/genre/movie/list${API_KEY}&language=${LANGUAJE}`,
  filterByGenres:`${BASE_URL}/discover/movie${API_KEY}`, 
  searched: `${BASE_URL}/search/movie${API_KEY}&page=1&region=CO&language=${LANGUAJE}`,
}


//https://api.themoviedb.org/3/genre/movie/list?api_key=28b214b65e7b229f965d281328f405d2&language=es-CO



// https://api.themoviedb.org/3/search/movie?api_key=28b214b65e7b229f965d281328f405d2&query=botas&page=1









// https://api.themoviedb.org/3/discover/movie?api_key=28b214b65e7b229f965d281328f405d2&with_genres=28&language=es-CO&region=CO


