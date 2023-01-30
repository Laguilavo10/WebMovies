import '../../styles/Genrers.css'

import { NavLink } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

export function Genres() {
  // debugger
  let {loading, state} = useFetch({endpoint: 'genres'})

  return (
    <>
      <section className="genders-container">
        <h2>Generos peliculas</h2>
        <div className="genders-list">
          {!loading &&
            state.genres.map((genre) => (
              <NavLink key={genre.id} to={`/genres/${genre.id}?genre=${genre.name}`}>{genre.name}</NavLink>
            ))}
        </div>
      </section>
    </>
  )
}
