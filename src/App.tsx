import { useEffect, useState } from 'react'
import CoinCard from './components/CoinCard';
import FilterInput from './components/FilterInput';
import LimitSelector from './components/LimitSelector';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');

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

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filter.toLowerCase()) ||
           coin.symbol.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>CoinGecko API</h1>
      { loading && <p>Loading...</p> }
      { error && <div className="error">Error: {error}</div> }

      <div className="top-controls">
        <FilterInput
          filter={filter}
          onFilterChange={setFilter} />

        <LimitSelector
          limit={limit}
          onLimitChange={setLimit} />
      </div>

      { !loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? filteredCoins.map((coin: any) => (
            <CoinCard
              coin={coin}
              key={coin.id} />
          )) : (<p>No coins found.</p>)}
        </main>
      )}
    </>
  )
}

export default App
