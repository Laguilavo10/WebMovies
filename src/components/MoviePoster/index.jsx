import React from "react"
import "../../styles/Genrers.css"
import { useRedirectMovie } from "../../hooks/useRedirectMovie"
import { BASE_URL_IMG } from "../../utils/API"

export function MoviePoster({title, dataMovie}) {
  let redirect = useRedirectMovie(title, dataMovie)
  return (
    <div
      onClick={redirect}
      className="recent-poster"
      key={dataMovie.id}
    >
      <img src={`${BASE_URL_IMG}${dataMovie.poster_path}`} alt={dataMovie.id} />
      <div className="shadow-poster"></div>
      <p>{dataMovie.title}</p>
    </div>
  )
}
