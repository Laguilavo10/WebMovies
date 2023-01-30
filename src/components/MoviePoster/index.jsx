import "../../styles/MoviePoster.css"
import star from "../../assets/star.svg"

import { useRedirectMovie } from "../../hooks/useRedirectMovie"
import { BASE_URL_IMG } from "../../utils/API"

export function MoviePoster({ title, dataMovie }) {
  if (!dataMovie.poster_path) {
    return null //si no tiene poster mejor que no lo muestre
  }

  let redirect = useRedirectMovie(title, dataMovie)
  let score = dataMovie.vote_average.toFixed(1)
  return (
    <div onClick={redirect} className="movie-poster" key={dataMovie.id}>
      <img src={`${BASE_URL_IMG}${dataMovie.poster_path}`} alt={dataMovie.id} />
      <div className="shadow-poster">
        <div>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="#F9D300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7309 3.51014L15.4909 7.03014C15.7309 7.52014 16.3709 7.99014 16.9109 8.08014L20.1009 8.61014C22.1409 8.95014 22.6209 10.4301 21.1509 11.8901L18.6709 14.3701C18.2509 14.7901 18.0209 15.6001 18.1509 16.1801L18.8609 19.2501C19.4209 21.6801 18.1309 22.6201 15.9809 21.3501L12.9909 19.5801C12.4509 19.2601 11.5609 19.2601 11.0109 19.5801L8.02089 21.3501C5.88089 22.6201 4.58089 21.6701 5.14089 19.2501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2209 1.60014 12.7809 1.60014 13.7309 3.51014Z"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{score}</span>
        </div>
      </div>
      <p>{dataMovie.title}</p>
    </div>
  )
}
