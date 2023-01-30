import '../styles/ByGenders.css'

import { useLocation, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import { MoviePoster } from "../components/MoviePoster"
import { Loading } from "../components/Loading"

export function ByGenrers() {
  let hola = useParams()
  let { search } = useLocation()
  let category = search.split('=')[1];

  let { state, loading } = useFetch({
    endpoint: "filterByGenres",
    queryParameters: hola.movieID,
  })

  //Envuelve el contenido en un componente Loading para que procese un cargando.. mientras llega la respuesta
  return (
    <>
      <Loading loading={loading}> 
        <main className="byGenrers">
          <h1>{category}</h1>
          <div className="byGenders-list">
            {state.results?.map((movie) => (
              <MoviePoster title={movie.title} dataMovie={movie} key={movie.id} />
            ))}

          </div>
        </main>
      </Loading>
    </>
  )
}
