import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import {toast} from 'react-toastify'

const List = () => {

  const [list,setList]=useState([])

  const fetchList =async()=>{
    try {
      
      const response =await axios.get(backendUrl + '/api/product/list')
      console.log(response.data)
      if(response.data.success){
        setList(response.data.data)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
<div className='mx-15 mt-10'>
      <p className="text-xl font-light mb-3">All Products List</p>
      {/*------------------ List Table Items---------- */}
      <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center px-4 py-2 bg-gray-100 font-semibold text-sm">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className='px-10'>Action</p>
      </div>
      {/* -----------Product List----------------- */}
      {
        list.map((item,index)=>(
          <div className='mt-2 outline-none grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.images[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className=' text-center md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))
      }
    </div>
  )
}

export default List
