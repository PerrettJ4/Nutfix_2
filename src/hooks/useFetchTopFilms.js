import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3f0d8b82c7mshd4c1d98209fe51dp1bb9f3jsn8fb75648d89d',
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
  }
};

export const dummyTopFilms = [
  {
    id: 'tt0111161',
    title: 'The Shawshank Redemption',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0068646',
    title: 'The Godfather',
    image:
      'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0468569',
    title: 'The Dark Knight',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
  },
  {
    id: 'tt0071562',
    title: 'The Godfather Part II',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0050083',
    title: '12 Angry Men',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0167260',
    title: 'The Lord of the Rings: The Return of the King',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0108052',
    title: "Schindler's List",
    image:
      'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0110912',
    title: 'Pulp Fiction',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0120737',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0060196',
    title: 'The Good, the Bad and the Ugly',
    image:
      'https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0109830',
    title: 'Forrest Gump',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0167261',
    title: 'The Lord of the Rings: The Two Towers',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0137523',
    title: 'Fight Club',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt1375666',
    title: 'Inception',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
  },
  {
    id: 'tt0080684',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0133093',
    title: 'The Matrix',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0099685',
    title: 'Goodfellas',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0816692',
    title: 'Interstellar',
    image:
      'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0073486',
    title: "One Flew Over the Cuckoo's Nest",
    image:
      'https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0114369',
    title: 'Se7en',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg'
  }
];

export const dummyTopSeries = [
  {
    id: 'tt0903747',
    title: 'Breaking Bad',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt5491994',
    title: 'Planet Earth II',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzY4NDBkMWYtYzdkYy00YzBjLWJmODctMWM4YjYzZTdjNWE5XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0795176',
    title: 'Planet Earth',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0185906',
    title: 'Band of Brothers',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt7366338',
    title: 'Chernobyl',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0306414',
    title: 'The Wire',
    image:
      'https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0417299',
    title: 'Avatar: The Last Airbender',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDMwMThjYWYtY2Q2OS00OGM2LTlkODQtNDJlZTZmMjAyYmFhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt6769208',
    title: 'Blue Planet II',
    image:
      'https://m.media-amazon.com/images/M/MV5BNmUwYThjM2UtNTg1Yy00MzRlLThhMmYtNjlmOWU0ZmQxZDA3XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0141842',
    title: 'The Sopranos',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt2395695',
    title: 'Cosmos: A Spacetime Odyssey',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTRlMzk0NzctNTI3Ni00N2E2LWJiNGMtMDdlNjk1YWNmMzkyXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0081846',
    title: 'Cosmos',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTA5MWFhMzAtOWU1OS00Yjk4LTlkNGItNGI3N2VkNzcyNGU2XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt9253866',
    title: 'Our Planet',
    image:
      'https://m.media-amazon.com/images/M/MV5BZDE1NzlkNWMtNzFiMC00ZTgxLTgyMmItOTU5OGI2NWQ4MDMxXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0944947',
    title: 'Game of Thrones',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt7678620',
    title: 'Bluey',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0071075',
    title: 'The World at War',
    image:
      'https://m.media-amazon.com/images/M/MV5BM2I1OGUyNmYtZmNiOC00OGQ4LWFlNDEtYTM5ZTAxMDI4ZmMyXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt1355642',
    title: 'Fullmetal Alchemist: Brotherhood',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt1533395',
    title: 'Life',
    image:
      'https://m.media-amazon.com/images/M/MV5BZDJjMzJiMTktMWZkZi00YWY0LWJjNGUtY2ZmNTFlOThhZTA4XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt2861424',
    title: 'Rick and Morty',
    image:
      'https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt8420184',
    title: 'The Last Dance',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTQyYmQ1N2UtYjFkNS00NzgyLTk5YTUtYjExMDdjOTA3MGU2XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 'tt0052520',
    title: 'The Twilight Zone',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjdmOTE3NjItY2JkMi00YjlhLWI0M2UtZjEwZTQ4ZDBkM2I0XkEyXkFqcGc@._V1_.jpg'
  }
];

const useTopFilms = (limit) => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!limit || !options?.headers?.['x-rapidapi-host']) return;

    const fetchTopFilms = async () => {
      setLoading(true);
      try {
        const url = `https://${options.headers['x-rapidapi-host']}/api/title/get-chart-rankings?rankingsChartType=TOP_250_TV&limit=${limit}`;
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
        // console.log(JSON.stringify(simplifiedFilms, null, 2));
        setFilms(simplifiedFilms);
      } catch (err) {
        console.error('Error fetching or parsing data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // fetchTopFilms();
    setFilms(dummyTopFilms);
  }, [limit, options]);

  return { films, loading, error };
};

export default useTopFilms;
