import Constants from 'expo-constants';
import { useEffect, useState } from 'react';

// or for newer EAS builds / Expo Go:
const apiKey = Constants.expoConfig?.extra?.apiKey;
const apiUrl = Constants.expoConfig?.extra?.apiUrl;

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': apiUrl
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
        const url = `https://imdb236.p.rapidapi.com/imdb/${id.id}`;
        // eslint-disable-next-line no-undef
        const response = await fetch(url, options);
        const text = await response.text();

        const data = JSON.parse(text);
        if (id.description) {
          setFilmData({ ...data, primaryImage: id.image });
        } else {
          setFilmData(data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
    // setFilmData(dummyFilm);
  }, [id]);

  const closeFilmModal = () => setFilmData(null);

  return { filmData, loading, error, closeFilmModal };
};

export default useFilmById;
