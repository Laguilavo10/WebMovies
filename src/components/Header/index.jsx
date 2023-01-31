import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import search from "../../assets/search.svg"
import "../../styles/Header.css"

export function Header() {
  const [inputOpen, setInputOpen] = useState(false)

  return (
    <header className="header">
      <NavLink to="/">MoviesLaguilavo</NavLink>
      <section className="links-container">
          <NavLink to={'/search'} className='link-search'>
            <img src={search} alt='search' />
            <p>Busqueda</p>
          </NavLink>
      </section>
    </header>
  )
}
