import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
function App() {
  return (
    <div>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
