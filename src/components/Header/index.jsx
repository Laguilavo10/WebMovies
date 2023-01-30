import { useState } from 'react'
import { NavLink } from 'react-router-dom' 
import '../../styles/Header.css'
import search from "../../assets/search.svg";


export function Header() {

  const [inputOpen, setInputOpen] = useState(false);
  
  const openInputSearch = ()=>{
    setInputOpen(true)
  }

  const closeInputSearch = ()=>{
    setInputOpen(false)
  }

  console.log(inputOpen);
  

  return (
    <header className='header'>
      <NavLink to='/'>MoviesLaguilavo</NavLink>
      <section className='links-container'>
        <div className={`search-container search-open--${inputOpen}`} >
          <img src={search} alt="" onClick={openInputSearch}/>
          <input type="text" placeholder='Search Movie' className={`input-open--${inputOpen}`}/>
          <p onClick={closeInputSearch} className={`close-input--${inputOpen}`}>x</p>
        </div>
      </section>
    </header>
  )
}
