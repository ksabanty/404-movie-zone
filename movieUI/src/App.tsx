import { useState, useEffect } from 'react'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'

import './App.css'

function App() {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies")
      setMovies(response.data)
    } 
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home movies={movies}/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
