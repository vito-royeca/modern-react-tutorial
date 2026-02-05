type TextInputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    onChange,
    isRequired = false
}) => {
    return ( 
        <div className="mb-4">
            <label htmlFor={name} className='block font-semibold text-blue-600'>
                {label}
            </label>
            <input
                name={name}
                type='text'
                className='w-full p-2 border border-gray-300 text-purple-800 rounded-lg'
                value={value}
                onChange={onChange}
                required={isRequired}
            />
        </div>
     );
}
 
export default TextInput;