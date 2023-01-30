import "../../styles/Recent.css"

import { useFetch } from "../../hooks/useFetch.js"
import { MoviePoster } from "../MoviePoster"
import { Loading } from "../Loading"


export function Recent() {

  let { loading, state } = useFetch({ endpoint: "trending" })

  let movies = !loading ? [...state.results].splice(0, 5) : []

  return (
    <>
      <Loading loading={loading}>
        <section className="recent-container">
          <h2>Nuevos Lanzamientos</h2>
          <div className="recent-poster--container">
            {movies.map((movie, id) => (
              <MoviePoster title={movie.title} dataMovie={movie} key={movie.id} />
            ))}
          </div>
        </section>
      </Loading>
    </>
  )
}
