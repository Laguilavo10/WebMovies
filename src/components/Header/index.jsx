import React from 'react'
import { NavLink } from 'react-router-dom' 
import '../../styles/Header.css'

export function Header() {

  const stylesLinks = (isActive) => (isActive ? {
    textDecoration: 'underline',
    textUnderlineOffset:'5px'
  }: null)

  return (
    <header className='header'>
      <NavLink to='/'>MoviesLaguilavo</NavLink>
      <section className='links-container'>
        {/* <NavLink to='/' style={({ isActive }) => stylesLinks(isActive)}>Home</NavLink> */}
        {/* <NavLink to='/movies' style={({ isActive }) => stylesLinks(isActive)}>Movies</NavLink> */}
        {/* <NavLink to='/series' style={({ isActive }) => stylesLinks(isActive)}>Series</NavLink> */}
        <div className='search-container'>
          <input type="text" placeholder='Search Movie'/>
        </div>
      </section>
    </header>
  )
}
