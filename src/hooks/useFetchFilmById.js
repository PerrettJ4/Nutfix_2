import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3f0d8b82c7mshd4c1d98209fe51dp1bb9f3jsn8fb75648d89d',
    'x-rapidapi-host': 'film-show-ratings.p.rapidapi.com'
  }
};

const useFilmById = (id) => {
  const [filmData, setFilmData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchFilm = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://film-show-ratings.p.rapidapi.com/item/?id=${id}`;
        // eslint-disable-next-line no-undef
        const response = await fetch(url, options);
        const text = await response.text();

        const data = JSON.parse(text);
        console.log({ data });
        setFilmData(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  return { filmData, loading, error };
};

export default useFilmById;
