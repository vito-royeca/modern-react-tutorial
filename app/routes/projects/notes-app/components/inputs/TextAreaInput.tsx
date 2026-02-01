const TextAreaInput = ({
    label,
    name,
    value,
    onChange,
    isRequired=false
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isRequired?: boolean;
}) => {
    return ( 
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold text-blue-600">
                {label}
            </label>
            <textarea
                name={name}
                className="w-full p-2 border border-gray-300 text-purple-800 rounded-lg"
                value={value}
                onChange={onChange}
                required={isRequired}
            >
            </textarea>
        </div>
    );
}
 
export default TextAreaInput;