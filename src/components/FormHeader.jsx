import React from 'react'

export default function FormHeader({message,heading}) {
  return (
    <div>
      <div className='text-center text-md text-appDimGray font-medium'>
          {message}
      </div>
    <div className='text-center text-2xl text-appDarkGray font-medium mb-6'>
          {heading}
    </div>
    </div>
  )
}
