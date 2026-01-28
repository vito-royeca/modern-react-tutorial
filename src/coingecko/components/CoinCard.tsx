import { Link } from "react-router";

const CoinCard = ({ coin }) => {
    return (
        <Link to={`/coingecko/${coin.id}`}>
            <div className="coin-card">
                <div className="coin-header">
                <img src={coin.image} alt={coin.name} width="25" height="25" className='coin-image'/>
                <div>
                    <h2>{coin.name}</h2>
                    <p className='symbol'>{coin.symbol.toUpperCase()}</p>
                </div>
                </div>
                <p>Price: {coin.current_price.toLocaleString()}</p>
                <p className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_24h.toFixed(2)} %
                </p>
                <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
                <p>Volume: {coin.total_volume.toLocaleString()}</p>            
            </div>
        </Link>
    );
}
                
export default CoinCard;