import React,{useState} from 'react'
import {Navbar,Filters,SortSection} from '../components'


export default function Home() {
  const [view,setView] = useState('table')
  const [filters,setFilters] = useState({
    country:'',
    language:'',
    duration:'',
    university:'',
    cost: { min: 0, max: 15000 },
  })

  const onFilterChange = (name,value)=>{
    setFilters((prev) => ({
      ...prev,
      [name]:value
    }))
  }

  const handleView = (val)=>{
    setView(val)
  }


  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='px-8'>
        <div className='mt-10'>
          <Filters filters={filters} onFilterChange = {onFilterChange} />
        </div>
        <div className='my-2'>
          <SortSection view={view} handleView={handleView}/>
        </div>
      </div>
    </div>
  )
}
