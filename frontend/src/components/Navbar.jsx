import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Login from '../pages/Login';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // ✅ proper way to use it
  const { setShowSearch, token , setToken , setCartItems,  getCartCount } = useContext(ShopContext);
  
 
  const handleLogout = () => {
      console.log("Hi");
    localStorage.removeItem("token");
    localStorage.removeItem('isLoggedIn');
     setToken('');
    navigate('/Login');
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
   
  return (
    <div className='flex items-center justify-between py-5 font medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt="" />
      </Link>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
        </NavLink>
      </ul>
         
      {/* Action Buttons */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <Link to='/login'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          </Link>
          <div className='group-hover:block hidden absolute  right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={handleLogout} className='cursor-pointer hover:text-black'>LogOut</p> 
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        <button onClick={toggleDarkMode} className='ml-4'>
          <p>Dark Mode</p>
        </button>
      </div>
      
      {/* Sidebar for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2' to='/contact'>Contact</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2' to='/about'>About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
