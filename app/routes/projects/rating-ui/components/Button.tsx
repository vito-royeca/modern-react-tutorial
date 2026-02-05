type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    onClick,
    disabled
}) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}>
                {children}
        </button>
    );
}
 
export default Button;