function Input({placeholder, type="text", className="", ...props}) {
  return (
    <input 
    type={type}
    placeholder={placeholder}
    className={`bg-transparent border border-gray-400
    placeholder:text-slate-400
    text-slate-700 text-sm 
    rounded-md px-3 py-4 w-full
    ${className}
    `}
    {...props}
    />
  )
}

export default Input