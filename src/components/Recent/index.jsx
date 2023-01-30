import { useEffect, useState } from "react"
import "../../styles/Recent.css"
import { BASE_URL_IMG } from "../../utils/API"
import { useFetch } from "../../hooks/useFetch.js"
import { NavLink, useNavigate } from "react-router-dom"
import { MoviePoster } from "../MoviePoster"
// import { redirectMovie } from "../../utils/redirectMovie";

export function Recent() {

  let { loading, state } = useFetch({ endpoint: "trending" })

  if (loading) {
    return null
  }

  let movies = [...state.results].splice(0, 5)

  return (
    <>
      <section className="recent-container">
        <h2>Nuevos Lanzamientos</h2>
        <div className="recent-poster--container">
          {movies.map((movie, id) => (
            <MoviePoster title={movie.title} dataMovie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </>
  )
}
