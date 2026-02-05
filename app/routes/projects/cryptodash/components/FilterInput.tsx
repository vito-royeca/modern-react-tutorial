type FilterInputProps = {
    filter: string;
    onFilterChange: (value: string) => void;
};

const FilterInput: React.FC<FilterInputProps> = ({
    filter,
    onFilterChange
}) => {
    return (
        <div className="filter">
            <input
                id="filter"
                type="text"
                value={filter}
                placeholder="Filter coins by name or symbol"
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    );
}

export default FilterInput;