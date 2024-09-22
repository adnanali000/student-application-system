import { Columns } from '../utils/dummyValues'

export default function TableView({ data }) {
    const getValues = (col,val)=>{
        if(col == 'duration'){
            return `${val} Year(s)`
        }else if(col == 'cost'){
            return `$ ${val}`
        }
        else{
            return val
        }
    }

    return (
        <div className='w-full'>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">#</th>
                            {Columns?.map((col, colIndex) => (
                                <th key={colIndex} scope="col" className="px-6 py-3">
                                    {col.label}
                                </th>
                            ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={index} className={`${index % 2 == 0 ?'bg-white':'bg-gray-50'} hover:bg-gray-100`}>
                            <td className='px-6 py-4'>{index + 1}</td>                               
                            {Columns.map((col,i)=>(
                                <td key={i} className="px-6 py-4">
                                    {getValues(col.name,item[col.name])}
                                </td>
                            )) 
                            }
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
