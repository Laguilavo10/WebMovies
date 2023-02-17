import star from "../assets/star.svg"
import "../styles/Movie.css"
import { useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Loading } from "../components/Loading"
import { BASE_URL_IMG, WIDTH_URL_IMG } from "../utils/API"
import { removeAccents } from "../utils/removeAccents"
import { Related } from "../components/Related"
import arrow from '../assets/arrow.svg'


export function Movie() {

  useEffect(() => {
    window.scrollTo(0, 0) //se pone en el top de la pagina
  }) 
  
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

    const returnLastPage = ()=>{
      navigate(-1)
    }
  return (
    <>
      <Loading loading={loading}>
        <main>
          
          <button onClick={returnLastPage} className='btn-lastPage'>
            <img src={arrow} alt="" />
          </button>
          <div className="shadow-back"></div>
          <article className="movie-container">
            <div className="movie-info">
              <h2>{urlInfo.state?.title}</h2>
              <div className="movie-stars">
                <img src={star} alt="" />
                <p>{urlInfo.state?.vote_average.toFixed(1)}</p>  
              </div>
              <p>{urlInfo.state?.overview}</p>
              <ul className="movie-genres--has">
                <p>Generos :</p>
                <div>
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

                </div>
              </ul>
            </div>
            <img
              className="movie-poster--info"
              src={`${BASE_URL_IMG}${WIDTH_URL_IMG["w500"]}${urlInfo.state?.poster_path}`}
              alt={urlInfo.state?.title}
            />
          </article>
          <Related movieID={urlInfo.state?.id}/>
        </main>
      </Loading>
    </>
  )
}
