type TimerDisplayProps = {
    time: number
};

const TimerDisplay: React.FC<TimerDisplayProps> = ({
    time
}) => {
    return ( 
        <h2 className="text-4xl font-semibold mt-4 text-blue-600">
            Time: { time }
        </h2>
    );
}

export default TimerDisplay;