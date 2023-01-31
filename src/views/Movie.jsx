import { useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import star from "../assets/star.svg"
import { useFetch } from "../hooks/useFetch"
import { Loading } from "../components/Loading"
import "../styles/Movie.css"
import { BASE_URL_IMG, WIDTH_URL_IMG } from "../utils/API"
import { removeAccents } from "../utils/removeAccents"

export function Movie() {

  let urlInfo = useLocation()
  let navigate = useNavigate()
  let { state, loading } = useFetch({ endpoint: "genres" })

  let genresMovieHas = []

  useEffect(() => {
    if (!urlInfo.state) return navigate('/')
  }, []);
  

  !loading &&
    (genresMovieHas = state.genres?.filter((a) =>
      urlInfo.state?.genre_ids.includes(a.id)
    ))

  return (
    <>
      <Loading loading={loading}>
        <main>
          <article className="movie-container">
            <div className="movie-info">
              <h2>{urlInfo.state?.title}</h2>
              <p>{urlInfo.state?.vote_average}</p>
              <div className="movie-stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>{urlInfo.state?.overview}</p>
              <ul className="movie-genres--has">
                <p>Generos :</p>
                {genresMovieHas.map((genre) => (
                  <NavLink
                    key={genre.id}
                    to={`/genres/${genre.id}?genre=${removeAccents(
                      genre.name
                    )}`}
                    className={`id${genre.id}`}
                  >
                    <div id={`id${genre.id}`} className="colors-id"></div>
                    <p>{genre.name}</p>
                  </NavLink>
                ))}
              </ul>
            </div>
            <img
              className="movie-poster--info"
              src={`${BASE_URL_IMG}${WIDTH_URL_IMG["w500"]}${urlInfo.state?.poster_path}`}
              alt={urlInfo.state?.title}
            />
          </article>
        </main>
      </Loading>
    </>
  )
}
