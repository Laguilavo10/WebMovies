import React from "react"
import "../styles/Search.css"
import { useState } from "react"
import { Loading } from "../components/Loading"
import { MoviePoster } from "../components/MoviePoster"
import { useFetch } from "../hooks/useFetch"
import ex from "../assets/delete.svg"

export function Search() {
  // debugger
  let userLocalStorage = JSON.parse(localStorage.getItem("valueInput"));
  
  const [valueInput, setvalueInput] = useState('')
  if (userLocalStorage == null) {
    localStorage.setItem('valueInput', JSON.stringify(''))
  }

  let endpoint
  let parameters = ""
  
  //si el input esta en blanco muestra las que estan en trending
  if (valueInput != "") {
    endpoint = "searched"
    parameters = `&query=${valueInput}`
  } else {
    endpoint = "trending"
  }

  let { state, loading } = useFetch({ endpoint, queryParameters: parameters })

  const handleSearch = (e) => {
    setvalueInput(e.target.value)
    localStorage.setItem('valueInput', JSON.stringify((e.target.value)))
  }
  const deleteSearch = (e) => {
    e.preventDefault()
    setvalueInput("")
    localStorage.setItem('valueInput', JSON.stringify(''))
  }
  return (
    <>
      <Loading loading={loading}>
        <section className="movie-search">
          <h1>Busqueda</h1>
          <form className="movie-search--form" onSubmit={deleteSearch}>
            <input
              type="text"
              value={valueInput}
              placeholder="Search"
              onChange={handleSearch}
            />
            <button>
              <img src={ex} className={`${valueInput == "" && "invisible"}`} />
            </button>
          </form>
          <h4>
            {state.results?.length != 0 &&
              `Tus resultados para la busqueda de: ${valueInput}`}
          </h4>
          <div className="movie-poster--container">
            {state.results?.length === 0 && (
              <h1>
                No se encontraron Resultados para la busqueda de: {valueInput}
              </h1>
            )}
            {state.results?.map((movie) => (
              <MoviePoster
                title={movie.title}
                dataMovie={movie}
                key={movie.id}
              />
            ))}
          </div>
        </section>
      </Loading>
    </>
  )
}
