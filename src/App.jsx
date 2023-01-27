import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './views/Home'


export default function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<h1>Not Found</h1>}></Route>
        </Routes> 


      </HashRouter>
    </>
  )
}
