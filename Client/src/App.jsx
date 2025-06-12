import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import AdminPage from './Pages/AdminPage'
import Signup from './Pages/Signup'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}  />
    <Route path='/admin' element={<AdminPage/>}  />
     <Route path='/login' element={<Login/>}  />
     <Route path='/signup' element={<Signup/>}  />
   </Routes>
   </BrowserRouter>
  )
}

export default App