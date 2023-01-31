import "../styles/ByGenrers.css"
import { useLocation, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { MoviePoster } from "../components/MoviePoster"
import { Loading } from "../components/Loading"
import { useEffect, useState } from "react"
import arrow from "../assets/arrow.svg"

export function ByGenrers() {
  let slug = useParams()

  const [currentPage, setCurrentPage] = useState(1)

  let queryParameters = `&page=${currentPage}&language=en-US&region=CO&with_genres=${slug.movieID}`
  const [parameters, setParameters] = useState(queryParameters)

  let { state, loading } = useFetch({
    endpoint: "filterByGenres",
    queryParameters: parameters,
  })

  useEffect(() => {
    setParameters(
      `&page=${currentPage}&language=en-US&region=CO&with_genres=${slug.movieID}`
    )
  }, [currentPage])

  let { search } = useLocation()

  let category = search.split("=")[1]

  const paginaAnterior = () => {
    setCurrentPage((prevState) => (prevState === 1 ? 1 : prevState - 1))
  }

  const paginaSiguiente = () => {
    setCurrentPage((prevState) =>
      prevState === state.total_pages ? state.total_pages : prevState + 1
    )
  }

  
  return (
    <>
      <Loading loading={loading}>
        <main className="byGenrers">
          <h1>{category}</h1>
          <div className="byGenrers-list">
            {state.results?.map((movie) => (
              <MoviePoster
                title={movie.title}
                dataMovie={movie}
                key={movie.id}
              />
            ))}
          </div>
          <section className="byGenrers-changePage--container">
            <img src={arrow} alt="left-arrow" className="arrow left-arrow" onClick={paginaAnterior}/>
            <p>Estas en la pagina {state.page} de  {state.total_pages}</p>
            <img src={arrow} alt="right-arrow" className="arrow right-arrow" onClick={paginaSiguiente}/>
          </section>
        </main>
      </Loading>
    </>
  )
}
