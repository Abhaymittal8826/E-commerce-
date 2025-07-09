import React, { useEffect } from 'react'
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login'


const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isLoginPage = location.pathname === '/login';

  if (!isLoggedIn && !isLoginPage) {
    navigate('/login');
  }
}, [location]);




  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-9[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
