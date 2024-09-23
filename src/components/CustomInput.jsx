
export default function CustomInput({type,value,handleIconClick=()=>{},icon,onKeyDown=()=>{},label,name,onChange,error,placeholder}) {
  return (
    <div className="mb-4 relative">
    <label className="text-appDarkGray text-sm font-medium">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        name={name}
        className={`shadow appearance-none border rounded mt-1 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-appRed' : ''
        }`}
      />
      {icon && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img onClick={handleIconClick} src={icon} alt="icon" className="w-5 h-5 text-gray-400" />
        </span>
      )}
    </div>
    {error && <p className="text-appRed text-xs font-medium mt-0.5">{error}</p>}
  </div>
  )
}
