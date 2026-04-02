import { useEffect, useState } from 'react';

const Ticker = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetching top 5 coins
        const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,BNB,DOGE&tsyms=USD`);
        const data = await res.json();
        const priceArray = Object.keys(data.RAW).map(key => ({
          name: key,
          price: data.RAW[key].USD.PRICE.toLocaleString(),
          change: data.RAW[key].USD.CHANGEPCT24HOUR.toFixed(2)
        }));
        setPrices(priceArray);
      } catch (err) { console.log(err); }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-brand-purple/10 dark:bg-white/5 backdrop-blur-sm border-b border-white/10 py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {[...prices, ...prices].map((coin, i) => (
          <div key={i} className="flex items-center gap-2 px-4">
            <span className="font-bold text-xs">{coin.name}</span>
            <span className="text-xs opacity-70">${coin.price}</span>
            <span className={`text-[10px] font-bold ${parseFloat(coin.change) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {coin.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
