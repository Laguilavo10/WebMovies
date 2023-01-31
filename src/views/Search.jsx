import React from "react"
import '../styles/Search.css'
import { useState } from "react"
import { Loading } from "../components/Loading"
import { MoviePoster } from "../components/MoviePoster"
import { useFetch } from "../hooks/useFetch"

export function Search() {

  const [valueInput, setvalueInput] = useState('')
  let endpoint
  let parameters = ''
  
  //si el input esta en blanco muestra las que estan en trending
  if (valueInput != '') {
    endpoint = 'searched'
    parameters = `&query=${valueInput}` 
  }else{
    endpoint = 'trending'
  }

  let { state, loading } = useFetch({ endpoint, queryParameters: parameters})

  const handleSearch = (e)=>{
    setvalueInput(e.target.value)
  }

  return (
    <>
      <Loading loading={loading}>
        <section>
          <form action="">
            <input type="text" value={valueInput} placeholder="buscar" onChange={handleSearch}/>
            <button>buscar</button>
          </form>
            <h4>{state.results?.length != 0 && `Tus resultados para la busqueda de: ${valueInput}`}</h4>
          <div className="movie-poster--container">
            {state.results?.length === 0 && <h1>No se encontraron Resultados para la busqueda de: {valueInput}</h1>}
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
