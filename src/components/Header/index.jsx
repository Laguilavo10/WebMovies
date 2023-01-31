import { NavLink } from "react-router-dom"
import search from "../../assets/search.svg"
import home from "../../assets/home.svg"
import "../../styles/Header.css"

export function Header() {

  return (
    <header className="header">
      <NavLink to="/">MoviesLaguilavo</NavLink>
      <section className="links-container">
        <NavLink to="/" className='link-item--container'>
          <img src={home} alt="search" />
          <p className="link-item--info">Home</p>
        </NavLink>
        <NavLink to={"/search"} className="link-item--container">
          <img src={search} alt="search" />
          <p className="link-item--info">Busqueda</p>
        </NavLink>
      </section>
    </header>
  )
}
