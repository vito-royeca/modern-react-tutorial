import { useEffect, useState } from 'react'
import CoinCard from './components/CoinCard';
import LimitSelector from './components/LimitSelector';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoins(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit]);
  
  return (
    <>
      <h1>CoinGecko API</h1>
      { loading && <p>Loading...</p> }
      { error && <div className="error">Error: {error}</div> }

      <LimitSelector
        limit={limit}
        setLimit={setLimit} />

      { !loading && !error && (
        <main className="grid">
          {coins.map((coin: any) => (
            <CoinCard
              coin={coin}
              key={coin.id} />
          ))}
        </main>
      )}
    </>
  )
}

export default App
