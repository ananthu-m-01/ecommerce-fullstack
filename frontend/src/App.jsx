import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin.jsx'
import AllDeliveryGuy from './pages/AllDeliveryGuy.jsx'
import AllRestaurant from './pages/AllRestaurant.jsx'
import AllUsers from './pages/AllUsers.jsx'
import DeliveryGuy from './pages/DeliveryGuy.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Restaurant from './pages/Restaurant.jsx'
import User from './pages/User.jsx'
function App() {
  return (
    <div>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/delivery-guy' element={<DeliveryGuy/>}></Route>
        <Route path='/all-users' element={<AllUsers/>}></Route>
        <Route path='/all-restaurants' element={<AllRestaurant/>}></Route>
        <Route path='/all-delivery-guys' element={<AllDeliveryGuy/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
