import FormError from "./FormError";

function Select({ options, error, className = "", ...props }) {
  return (
    <div className="relative h-14">
      <select
        {...props}
        className={`w-full h-full appearance-none border border-gray-400 rounded-md px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white ${className}`}
      >
        <option value="">انتخاب کنید</option>
        {options.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="text-slate-700  placeholder:text-slate-400"
          >
            {item.label}
          </option>
        ))}
      </select>

      {/* Custom icon arrow */}
      <div className="absolute left-3 top-0 h-full flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <FormError message={error} />
    </div>
  );
}

export default Select;
