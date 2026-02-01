import { useEffect, useState } from 'react'

import './style.css'
import CoinList from './components/CoinList';
import ContentWrapper from '~/routes/components/ContentWrapper';

const API_URL = import.meta.env.VITE_COINS_API_URL;

function CryptoDash() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('market_cap_desc');

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await fetch(`${API_URL}&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCoins(data);
            } catch (e: Error | any) {
              setError(e.message);
            } finally {
              setLoading(false);
            }
        };

        fetchCoins();
    }, [limit, sortBy]);

    return (
        <ContentWrapper content={  
            <div className="bg-gray-900 text-white min-h-screen p-6">
                <CoinList
                    coins={coins}
                    filter={filter}
                    setFilter={setFilter}
                    limit={limit}
                    setLimit={setLimit}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    loading={loading}
                    error={error}
                />
            </div>
        } />
  )
}

export default CryptoDash