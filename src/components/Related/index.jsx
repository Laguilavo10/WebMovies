import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { API_KEY } from "../../utils/API"
import { Loading } from "../Loading"
import { MoviePoster } from "../MoviePoster"
import "../../styles/Related.css"

export function Related({ movieID }) {
  let queryParameters = `/${movieID}/similar${API_KEY}&language=es-CO&page=1`

  const { state, loading } = useFetch({ endpoint: "related", queryParameters })
  let moviesRelated = !loading ? [...state.results].splice(0, 5) : []

  useEffect(() => {
    let section = document.getElementById("related-container")
    if (section) {
      section.scrollLeft = 0;
      section.scrollTop = 0;
    }
  }) 
  
  return (
    <>
      <Loading loading={loading}>
        <section className="related-movies--container" >
          <h3>Relacionadas</h3>
          <div id="related-container">
            {moviesRelated.map((movie) => (
              <MoviePoster
                key={movie.id}
                title={movie.title}
                dataMovie={movie}
              />
            ))}
          </div>
        </section>
      </Loading>
    </>
  )
}
