import { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_CRYPTO_API_KEY;
      try {
        const res = await fetch(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`);
        const data = await res.json();
        setNews(data.Data.slice(0, 4));
      } catch (err) { console.log(err); }
    };
    fetchNews();
  }, []);

  return (
    <div className="glass-card p-6 rounded-3xl h-fit">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        Live Social Feed
      </h3>
      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <p className="text-xs text-brand-purple font-bold uppercase">{item.source}</p>
            <h4 className="text-sm font-medium mt-1 group-hover:text-brand-blue transition-colors line-clamp-2">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
