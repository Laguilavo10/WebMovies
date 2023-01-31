
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useRedirectMovie } from "../../hooks/useRedirectMovie";
import '../../styles/Trends.css'
import { BASE_URL_IMG, WIDTH_URL_IMG } from "../../utils/API";
import { Loading } from "../Loading";

export function Trends() {
  const [movieOrder, setMovieOrder] = useState(0);
  
  let {state, loading } = useFetch({endpoint:'trending'})
  let movies = !loading ? [...state.results].splice(0, 5) : [];
  
  let redirect = useRedirectMovie(movies[0]?.title, movies[0]) 
  
  return (
    <>
    <Loading loading={loading}>
      <section className="trends-container">
        <h2 className="trends-title">Tendencias</h2>
        <p>¿Que quieres ver el dia de hoy? Esta es la recomendacion de hoy</p>
        <div className="trends-img--container" onClick={redirect}>
          <div>
            <h4>{movies[movieOrder]?.title}</h4>
            <p>{movies[movieOrder]?.overview}</p>
          </div>
          <img src={`${BASE_URL_IMG}${WIDTH_URL_IMG['original']}${movies[movieOrder]?.backdrop_path}`} alt="" />
        </div>
      </section>
    </Loading>
    </>
  );
}
