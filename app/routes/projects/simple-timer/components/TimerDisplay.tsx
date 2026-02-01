const TimerDisplay = ({
    time
}: {
    time: number
}) => {
    return ( 
        <h2 className="text-4xl font-semibold mt-4">
            Time: { time }
        </h2>
    );
}

export default TimerDisplay;