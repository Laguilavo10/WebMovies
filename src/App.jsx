import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { ByGenrers } from './pages/ByGenrers'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Search } from './pages/Search'


export default function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie' element={<Movie/>}></Route>
          <Route path='/genres/:movieID' element={<ByGenrers/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='*' element={<h1>Not Found</h1>}></Route>
        </Routes> 
      </HashRouter>
    </>
  )
}
