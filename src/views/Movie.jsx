import React from "react"
import { useLocation } from "react-router-dom"
import star from "../assets/star.svg"
import { useFetch } from "../hooks/useFetch"
import "../styles/Movie.css"
import { BASE_URL_IMG, WIDTH_URL_IMG } from "../utils/API"

export function Movie() {
  let { state } = useLocation()

  // let { state, loading } = useFetch()
  console.log(state);
  


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
            src={`${BASE_URL_IMG}${WIDTH_URL_IMG['w500']}${state.poster_path}`}
            alt=""
          />
        </article>
      </main>
    </>
  )
}
