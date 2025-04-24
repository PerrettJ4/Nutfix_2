const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3f0d8b82c7mshd4c1d98209fe51dp1bb9f3jsn8fb75648d89d',
    'x-rapidapi-host': 'film-show-ratings.p.rapidapi.com'
  }
};

export const fetchFilmById = async (id) => {
  try {
    const url = `https://film-show-ratings.p.rapidapi.com/item/?id=${id}`;
    const response = await fetch(url, options);
    const result = await response.text();
    console.log({ result });
    const JSON = await response.json();
    console.log({ JSON });
    return JSON;
  } catch (error) {
    console.error(error);
  }
};
