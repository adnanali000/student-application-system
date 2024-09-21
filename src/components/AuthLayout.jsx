import React from 'react'
import logo from '../assets/logo.png'

export default function AuthLayout({children}) {
  return (
    <div className='flex justify-center flex-col items-center min-h-screen bg-gradient-to-r from-red-50 via-gray-100 to-red-50'>
       <div className="mb-10">
         <img src={logo} className='w-60 h-20'/>  
       </div>
       <div className='bg-white p-8 rounded-md shadow-lg max-w-md w-full'>
        {children}
       </div>     
    </div>
  )
}
