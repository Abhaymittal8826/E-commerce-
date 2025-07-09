import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div className=''>
      <div className='mt-3 text-2xl text-center pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-600'>50339 New Delhi <br /> Delhi, Rohini - 110014 </p>
          <p className=' text-gray-600'>Phone: 8826****** <br /> Email: sirabhaymittal@gmail.com </p>
          <p className='text-gray-500 text-xl font-semibold'>Career at Forever </p>
          <p className=' text-gray-600'>Let more about our teams and job openings. </p>
          <button className='rounded-[5px] border border-black px-3 py-2 bg-black text-white hover:bg-white hover:text-black transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact
