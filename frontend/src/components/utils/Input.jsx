
export const Input = ({ label, name, type }) => {
    return (
        <div className="flex flex-col  space-y-4">
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}:</label>
            <input type={type} ref={name} className=" outline-none text-slate-800 p-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" placeholder="" />
        </div>
    )
}
