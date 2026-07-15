import FormError from "./FormError";

function Select({ options, error, className="", ...props }) {
  return (
    <div>
      <select {...props}
       className={`bg-transparent text-slate-700 text-sm border
        border-gray-400 rounded-md px-3 py-4 w-full ${className}`}>
        <option value="">انتخاب کنید</option>
        {options.map((item) => (
            <option key={item.value} value={item.value} className="text-slate-700  placeholder:text-slate-400">
                {item.label}
            </option>
        ))}
      </select>
      <FormError message={error}/>
    </div>
  );
}

export default Select;
