import React from "react"
import { useLocation } from "react-router-dom"
import star from "../assets/star.svg"
import { useFetch } from "../hooks/useFetch"
import "../styles/Movie.css"

export function Movie() {
  // let { state } = useLocation()

  let { state, loading } = useFetch()

  return (
    <>
      <main>
        <article className="movie-container">
          <div className="movie-info">
            <h2>{state.title}</h2>
            <p>{state.vote_average}</p>
            <div className="movie-stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />

            </div>
            <p>{state.overview}</p>
          </div>
          <img
            className="movie-poster--info"
            src={`https://image.tmdb.org/t/p/w300${state.poster_path}`}
            alt=""
          />
        </article>
      </main>
    </>
  )
}
