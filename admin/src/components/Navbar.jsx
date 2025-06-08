import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img className='w-[200px]' src={assets.logo} alt="" />
    <button onClick={()=>setToken('')} className='border bg-gray-600 text-white text-xs sm:text-sm rounded-full px-5 py-2 sm:px-7 sm:py-2'>Log Out</button>
    </div>
  )
}

export default Navbar
