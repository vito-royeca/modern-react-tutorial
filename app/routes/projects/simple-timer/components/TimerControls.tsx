import { useEffect, useRef } from 'react';

type TimerControlProps = {
    isRunning: boolean;
    onToggle: () => void;
    onReset: () => void;
};

const TimerControls: React.FC<TimerControlProps> = ({ 
    isRunning,
    onToggle,
    onReset
}) => {
    const startButtonRef = useRef(null);

    useEffect(() => {
        if (startButtonRef.current) {
            (startButtonRef.current as HTMLElement).focus();
        }
    }, []);

    return ( 
        <>
            <button
                ref={startButtonRef}
                onClick={onToggle}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                { isRunning ? 'Pause' : 'Start' }
            </button>

            <button 
                onClick={onReset}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Reset
            </button>
        </>
    );
}
 
export default TimerControls;