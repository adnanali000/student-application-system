import React from 'react'

export default function Linking({label,link,handleLink=()=>{}}) {
  return (
    <div className='text-right text-sm space-x-1 mt-1'>
    <span>
      {label}
    </span>
    <span className='text-appRed hover:underline cursor-pointer' onClick={handleLink}>
      {link}
    </span>
  </div>
  )
}
