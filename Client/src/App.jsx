import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}  />
     <Route path='/login' element={<Login/>}  />
   </Routes>
   </BrowserRouter>
  )
}

export default App