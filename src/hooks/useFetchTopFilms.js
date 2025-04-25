import { useEffect, useState } from 'react';
import mockData from '../mockdata/data';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3f0d8b82c7mshd4c1d98209fe51dp1bb9f3jsn8fb75648d89d',
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
  }
};

const useTopFilms = (limit) => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!limit || !options?.headers?.['x-rapidapi-host']) return;

    const fetchTopFilms = async () => {
      setLoading(true);
      try {
        const url = `https://${options.headers['x-rapidapi-host']}/api/title/get-chart-rankings?rankingsChartType=TOP_250&limit=${limit}`;
        const response = await fetch(url, options);
        const text = await response.text();

        const data = JSON.parse(text);

        const simplifiedFilms = data.data.titleChartRankings.edges.map(
          (edge) => {
            const { item } = edge.node;
            return {
              id: item.id,
              title: item.titleText.text,
              image: item.primaryImage?.url || null
            };
          }
        );
        console.log(JSON.stringify(simplifiedFilms, null, 2));
        setFilms(simplifiedFilms);
      } catch (err) {
        console.error('Error fetching or parsing data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // fetchTopFilms();
    setFilms(Object.values(mockData.topFilms));
  }, [limit, options]);

  return { films, loading, error };
};

export default useTopFilms;
