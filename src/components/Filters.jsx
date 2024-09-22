import React from 'react'
import CustomSelect from './CustomSelect'
import { Countries, Languages, Durations, Universities } from '../utils/dummyValues'

export default function Filters({ filters, onFilterChange }) {
    return (
        <div className='w-full p-4 bg-white rounded-md shadow-lg'>
            <div className='text-lg font-medium'>Filter by : </div>
            <div className='flex items-center mt-2 gap-8 flex-wrap'>
                <CustomSelect labelText="Country" defaultOptionText="All countries" options={Countries} value={filters.country} onChange={(e) => onFilterChange('country', e.target.value)} />
                <CustomSelect labelText="University" defaultOptionText="All universities" options={Universities} value={filters.university} onChange={(e) => onFilterChange('university', e.target.value)} />
                <CustomSelect labelText="Duration" defaultOptionText="All durations" options={Durations} value={filters.duration} onChange={(e) => onFilterChange('duration', e.target.value)} />
                <CustomSelect labelText="Language" defaultOptionText="All languages" options={Languages} value={filters.language} onChange={(e) => onFilterChange('language', e.target.value)} />
                <div className='mb-4'>
                    <div className=''>
                        <label className='text-sm text-appDarkGray'>Cost</label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input
                            type="range"
                            min="5000"
                            max="15000"
                            value={filters.cost.max}
                            onChange={(e) => onFilterChange('cost', e.target.value)}
                        />
                        <span>Max Cost: ${filters.cost.max}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
