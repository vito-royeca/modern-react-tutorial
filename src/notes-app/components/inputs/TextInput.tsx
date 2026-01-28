const TextInput = ({
    label,
    name,
    value,
    onChange,
    isRequired = false
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
}) => {
    return ( 
        <div className="mb-4">
            <label htmlFor={name} className='block font-semibold'>
                {label}
            </label>
            <input
                name={name}
                type='text'
                className='w-full p-2 border rounded-lg'
                value={value}
                onChange={onChange}
                required={isRequired}
            />
        </div>
     );
}
 
export default TextInput;