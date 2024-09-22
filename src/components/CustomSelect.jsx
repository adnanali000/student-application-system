import React from 'react'

export default function CustomSelect({ labelText, options, value, onChange,defaultOptionText,customClass }) {
    return (
        <div className='w-full sm:w-fit'>
            <label className='text-sm text-appDarkGray'>{labelText}</label>
            <select value={value} className={`block p-2 mt-1 w-full border focus:outline-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${customClass}`} onChange={onChange} >
                {defaultOptionText && <option value="">{defaultOptionText}</option>}
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))

                }
            </select>

        </div>
    )
}
