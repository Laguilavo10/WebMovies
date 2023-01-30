import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "../../styles/Header.css"
import search from "../../assets/search.svg"

export function Header() {
  const [inputOpen, setInputOpen] = useState(false)
  let navigate = useNavigate()
  const openInputSearch = () => {
    !inputOpen && setInputOpen(true)
  }

  const closeInputSearch = () => {
    setInputOpen(false)
  }

  const searchMovie = (e) => {
    // let searchedMovie = e.target[1].value
    // navigate(`/movie?movie=${searchedMovie}`)
    navigate(`/search`)
    console.log(2);
    
  }

  return (
    <header className="header">
      <NavLink to="/">MoviesLaguilavo</NavLink>
      <section className="links-container">
        <div>
          <form onSubmit={searchMovie} className={`search-container search-open--${inputOpen}`}>
            <button className="search-button">
              <img src={search} alt="" onClick={openInputSearch} />
            </button>
            <input
              type="text"
              placeholder="Search Movie"
              className={`input-open--${inputOpen}`}
            />
          <p onClick={closeInputSearch} className={`close-input--${inputOpen}`}>
            x
          </p>
          </form>
        </div>
      </section>
    </header>
  )
}
