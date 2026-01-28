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
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <textarea
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={isRequired}
            >
            </textarea>
        </div>
    );
}
 
export default TextAreaInput;