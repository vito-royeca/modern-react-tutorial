import Timer from './components/Timer';
import './style.css';

const SimpleTimer = () => {
    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <Timer />
            </div>
        </>
    );
}

export default SimpleTimer;