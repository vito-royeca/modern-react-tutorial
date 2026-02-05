type SelectInputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    name,
    value,
    onChange,
    options
}) => {
    return ( 
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold text-blue-600">
                {label}
            </label>
            <select
                name={name}
                className="w-full p-2 border border-gray-300 text-purple-800 rounded-lg"
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
     );
}
 
export default SelectInput;