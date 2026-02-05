import CoinCard from './CoinCard';
import FilterInput from './FilterInput';
import LimitSelector from './LimitSelector';
import SortSelector from './SortSelector';
// import Spinner from '../../../components/Spinner';

type CoinListProps = {
    coins: any[];
    filter: string;
    setFilter: (value: string) => void;
    limit: number;
    setLimit: (value: number) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
    loading: boolean;
    error: any;
};

const CoinList: React.FC<CoinListProps> = ({
    coins,
    filter,
    setFilter,
    limit,
    setLimit,
    sortBy,
    setSortBy,
    loading,
    error
}) => {

    const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filter.toLowerCase()) ||
           coin.symbol.toLowerCase().includes(filter.toLowerCase());
    })
    .slice()
    .sort((a, b) => {
        switch (sortBy) {
        case 'market_cap_asc':
            return a.market_cap - b.market_cap;
        case 'market_cap_desc':
            return b.market_cap - a.market_cap;
        case 'price_asc':
            return a.current_price - b.current_price;
        case 'price_desc':
            return b.current_price - a.current_price;
        case 'change_asc':
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
        case 'change_desc':
            return b.price_change_percentage_24h - a.price_change_percentage_24h;
        default:
            return 0;
        }
    });

    return ( 
        <div>
            <h1>Crypto Dash</h1>
            {/* { loading && <Spinner color='#fff'/> } */}
            { loading && (<p>Loading...</p>) }
            { error && <div className="error">Error: {error}</div> }

            <div className="top-controls">
                <FilterInput
                filter={filter}
                onFilterChange={setFilter} />

                <LimitSelector
                limit={limit}
                onLimitChange={setLimit} />

                <SortSelector
                sortBy={sortBy}
                onSortByChange={setSortBy} />
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
        </div>
    );
}

export default CoinList;