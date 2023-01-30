import "../styles/ByGenrers.css"
import "../styles/Genrers.css"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { API_ENDPOINTS, BASE_URL_IMG } from "../utils/API"
// import { useRedirectMovie } from "../hooks/useRedirectMovie"
import { MoviePoster } from "../components/MoviePoster"
import Loading from "../components/Loading"

export function ByGenrers() {
  let { movieID } = useParams()


  let { state, loading } = useFetch({
    endpoint: "filterByGenres",
    queryParameters: movieID,
  })

  //Envuelve el contenido en un componente Loading para que procese un cargando.. mientras llega la respuesta
  return (
    <>
      <Loading loading={loading}> 
        <main className="byGenrers-container">
          {state.results?.map((movie) => (
            <MoviePoster title={movie.title} dataMovie={movie} key={movie.id} />
          ))}
        </main>
      </Loading>
    </>
  )
}
