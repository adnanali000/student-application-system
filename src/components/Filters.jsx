import React from 'react'
import CustomSelect from './CustomSelect'
import { Countries, Languages, Durations, Universities } from '../utils/dummyValues'

export default function Filters({ filters, onFilterChange }) {
    return (
        <div className='w-full p-4 bg-white rounded-md shadow-lg'>
            <div className='flex items-center gap-8 flex-wrap'>
                <CustomSelect labelText="Select Country" defaultOptionText="countries" options={Countries} value={filters.country} onChange={(e) => onFilterChange('country', e.target.value)} />
                <CustomSelect labelText="Select University" defaultOptionText="universities" options={Universities} value={filters.university} onChange={(e) => onFilterChange('university', e.target.value)} />
                <CustomSelect labelText="Select Duration" defaultOptionText="durations" options={Durations} value={filters.duration} onChange={(e) => onFilterChange('duration', e.target.value)} />
                <CustomSelect labelText="Select Language" defaultOptionText="languages" options={Languages} value={filters.language} onChange={(e) => onFilterChange('language', e.target.value)} />
                <div className='mb-4'>
                    <div className='mb-4'>
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
