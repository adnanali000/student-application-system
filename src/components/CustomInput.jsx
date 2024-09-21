
export default function CustomInput({type,value,onKeyDown=()=>{},label,name,onChange,error,placeholder}) {
  return (
    <div className="mb-4">
        <label className="text-appDarkGray text-sm font-medium">{label}</label>
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={name}
            className={`shadow appearance-none border rounded mt-1 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-appRed' : ''}`}            
        />
        {error && <p className="text-appRed text-xs font-medium mt-0.5">{error}</p>}
    </div>
  )
}
