import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

// import Spinner from '../../../components/Spinner';

ChartJS.register(
    CategoryScale,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
);

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({
    coinId
}: {
    coinId: string;
}) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch(`${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const prices = data.prices.map((price: any[]) => ({
                    x: price[0],
                    y: price[1]
                }));
                setChartData({
                    datasets: [
                        {
                            label: 'Price (USD)',
                            data: prices,
                            fill: true,
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0, 123, 255, 0.1)',
                            pointRadius: 0,
                            tension: 0.3,
                        },
                    ],
                } as any);
            } catch (e: Error | any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();
    }, [coinId]);

    return ( 
        <div style={{marginTop: '30px'}}>
            {/* { loading && <Spinner /> } */}
            { loading && (<p>Loading...</p>) }
            { error && <div className="error">Error: {error}</div> }
            { !loading && !error && chartData && (
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                mode: 'index',
                                intersect: false
                            },
                        },
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'day'
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 7
                                }
                            },
                            y: {
                                ticks: {
                                    callback: (value) =>  `$${value.toLocaleString()}`
                                }
                            }
                        }
                    }}
                />
            )}
        </div>
    );
}
 
export default CoinChart;