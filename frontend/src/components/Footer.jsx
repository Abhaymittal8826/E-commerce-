import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-30' />
        <p className='w-full md:w-1/2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem quis voluptate labore vitae atque veniam maxime, illo eum sapiente non, cupiditate earum. Ipsam accusantium vero in. Voluptatibus, officia ut.</p>
      </div>
        
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>

      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li> +91 8826997992</li>
            <li>sirabhaymittal@gmail.com</li>
        </ul>
      </div>
    </div>
          <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright 2025@Abhay</p>
          </div>

    </div>
  )
}

export default Footer
