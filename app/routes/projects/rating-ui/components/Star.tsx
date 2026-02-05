type StarProps = {
    star: number;
    rating: number;
    hover: number;
    color: string;
    ratingClick: (star: number) => void;
    hoverEnter: (star: number) => void;
    hoverLeave: () => void;
};

const Star: React.FC<StarProps> = ({
    star,
    rating,
    hover,
    color,
    ratingClick,
    hoverEnter,
    hoverLeave
}) => {
    return (
        <span
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={hoverLeave}
            className='star'
            style={{
                color: star <= (hover || rating) ? color : '#ccc'
            }}
        >
            {'\u2605'}
        </span>
    );
};

export default Star;