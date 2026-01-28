const Star = ({
    star,
    rating,
    hover,
    color,
    ratingClick,
    hoverEnter,
    hoverLeave
}: {
    star: number;
    rating: number;
    hover: number;
    color: string;
    ratingClick: (star: number) => void;
    hoverEnter: (star: number) => void;
    hoverLeave: () => void;
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