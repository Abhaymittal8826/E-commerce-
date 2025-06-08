import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div className=''>
      <div className='text-center pt-8 border-t text-2xl '>
        <Title text1={"ABOUT"} text2={'US'}/>
      </div>
      <div className='my-5 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium nobis molestiae quidem? Optio animi molestias, doloribus eaque accusamus dolorem fuga sapiente aspernatur, debitis sunt aut nemo omnis provident atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate dicta fugiat non cupiditate reprehenderit, nobis deserunt quas, iste, soluta temporibus omnis asperiores obcaecati neque ipsum dignissimos eligendi iusto porro?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus corporis odit id quos eaque consequuntur ipsa est in blanditiis, delectus sit, explicabo ut dolor vero, vitae voluptates laboriosam. Incidunt?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE  US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reiciendis veniam asperiores. Temporibus excepturi reprehenderit tempora esse quidem itaque, quasi repellat voluptatum animi libero neque. Sequi suscipit aliquam sed magnam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p  className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reiciendis veniam asperiores. Temporibus excepturi reprehenderit tempora esse quidem itaque, quasi repellat voluptatum animi libero neque. Sequi suscipit aliquam sed magnam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reiciendis veniam asperiores. Temporibus excepturi reprehenderit tempora esse quidem itaque, quasi repellat voluptatum animi libero neque. Sequi suscipit aliquam sed magnam.</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}


export default About
