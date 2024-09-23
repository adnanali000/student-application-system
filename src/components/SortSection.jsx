import React from 'react'
import CustomSelect from './CustomSelect'
import { Sortby,ItemsPage } from '../utils/dummyValues'
import CardIcon from '../assets/card.svg'
import CardGrayIcon from '../assets/cardGray.svg'
import TableIcon from '../assets/table.svg'
import TableGrayIcon from '../assets/tableGray.svg'

export default function SortSection({ view, handleView, handleSort, sortBy,perPage,handlePage }) {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-2'>
            <div title="Card view" onClick={() => handleView('card')} className={`w-8 h-8 rounded-full flex items-center justify-center ${view == 'card' ? 'bg-appRed' : 'bg-white cursor-pointer hover:bg-appLightGray'}`}>
                    <img  src={view=='card' ? CardIcon : CardGrayIcon} />     
                </div>
                <div title="Table view" onClick={() => handleView('table')} className={`w-8 h-8 rounded-full flex items-center justify-center ${view == 'table' ? 'bg-appRed' : 'bg-white cursor-pointer hover:bg-appLightGray'}`}>
                    <img src={view == 'table' ? TableIcon : TableGrayIcon} />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <CustomSelect defaultOptionText="Sort by" options={Sortby} value={sortBy} onChange={(e) => handleSort(e.target.value)} />
                </div>
                <div>
                    <CustomSelect options={ItemsPage} value={perPage} onChange={(e) => handlePage(e.target.value)} />
                </div>
            </div>
        </div>
    )
}
