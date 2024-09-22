import React,{useState,useEffect} from 'react'
import {Navbar,Filters,SortSection,TableView,CardView,Pagination} from '../components'
import {DummyData} from '../utils/dummyValues'


export default function Home() {
  const [data,setData] = useState(DummyData())
  const [filteredData,setFilteredData] = useState(data)
  const [view,setView] = useState("table")
  const [sortBy,setSortBy] = useState("")
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage,setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const [filters,setFilters] = useState({
    country:'',
    language:'',
    duration:'',
    university:'',
    cost: { min: 0, max: 15000 },
  })
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData?.slice(indexOfFirstItem, indexOfLastItem)

  const onFilterChange = (name,value)=>{
    if(name == 'cost'){
      setFilters((prev) => ({
        ...prev,
        cost:{
          ...prev.cost,
          max:value
        }
      }))
    }else{
      setFilters((prev) => ({
        ...prev,
        [name]:value
      }))
    }
  }

  const handleView = (val)=>{
    setView(val)
  }

  const handleItemPerPage = (val)=>{
    setItemsPerPage(val)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(()=>{
    let updatedData = [...data]

    if(filters.country){
      updatedData = updatedData.filter(val => val.country === filters.country)
    }
    if(filters.university){
      updatedData = updatedData.filter(val => val.university === filters.university)
    }
    if(filters.language){
      updatedData = updatedData.filter(val => val.language === filters.language)
    }
    if(filters.duration){
      updatedData = updatedData.filter(val => val.duration === parseInt(filters.duration))
    }
    if(filters.cost.min || filters.cost.max){
      updatedData = updatedData.filter(val => val.cost >= filters.cost.min && val.cost <= filters.cost.max)
    }

    if(sortBy == 'lowPrice'){
      updatedData.sort((a,b) => a.cost - b.cost)
    }else if(sortBy == 'highPrice'){
      updatedData.sort((a,b) => b.cost - a.cost)
    }else if(sortBy == 'deadline'){
      updatedData.sort((a,b) => new Date(a.deadline) - new Date(b.deadline))
    }
    setFilteredData(updatedData)
    setCurrentPage(1);
  },[data,filters,sortBy])

  const handleSort = (val)=>{
    setSortBy(val)
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='px-8'>
        <div className='mt-10'>
          <Filters filters={filters} onFilterChange = {onFilterChange} />
        </div>
        <div className='my-6'>
          <SortSection view={view} sortBy={sortBy} handleView={handleView} handlePage={handleItemPerPage} handleSort = {handleSort} />
        </div>
        <div>
          {view == 'table' ? <TableView data={currentData} /> : <CardView />}
        </div>
        <div>
          <Pagination currentPage={currentPage} totalPages={totalPages} perPage={itemsPerPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}
