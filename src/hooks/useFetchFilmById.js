import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3f0d8b82c7mshd4c1d98209fe51dp1bb9f3jsn8fb75648d89d',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};
const dummyFilm = {
  id: 'tt6723592',
  url: 'https://www.imdb.com/title/tt6723592/',
  primaryTitle: 'Tenet',
  originalTitle: 'Tenet',
  type: 'movie',
  description:
    'Armed with only the word "Tenet," and fighting for the survival of the entire world, CIA operative, The Protagonist, journeys through a twilight world of international espionage on a global mission that unfolds beyond real time.',
  primaryImage:
    'https://m.media-amazon.com/images/M/MV5BMTU0ZjZlYTUtYzIwMC00ZmQzLWEwZTAtZWFhMWIwYjMxY2I3XkEyXkFqcGc@._V1_.jpg',
  trailer: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
  contentRating: 'PG-13',
  startYear: 2020,
  endYear: null,
  releaseDate: '2020-09-03',
  interests: ['Time Travel', 'Action', 'Sci-Fi', 'Thriller'],
  countriesOfOrigin: ['US', 'GB'],
  externalLinks: [
    'https://www.facebook.com/tenetfilm/',
    'https://www.instagram.com/tenetfilm/'
  ],
  spokenLanguages: ['en'],
  filmingLocations: ['Linnahall, Tallinn, Estonia'],
  productionCompanies: [
    {
      id: 'co0002663',
      name: 'Warner Bros.'
    },
    {
      id: 'co0147954',
      name: 'Syncopy'
    },
    {
      id: 'co0002663',
      name: 'Warner Bros.'
    }
  ],
  budget: 205000000,
  grossWorldwide: 365304105,
  genres: ['Action', 'Sci-Fi', 'Thriller'],
  isAdult: false,
  runtimeMinutes: 150,
  averageRating: 7.3,
  numVotes: 628119,
  metascore: 69,
  directors: [
    {
      id: 'nm0634240',
      url: 'https://www.imdb.com/name/nm0634240/',
      fullName: 'Christopher Nolan'
    }
  ],
  writers: [
    {
      id: 'nm0634240',
      url: 'https://www.imdb.com/name/nm0634240/',
      fullName: 'Christopher Nolan'
    }
  ],
  cast: [
    {
      id: 'nm0913475',
      url: 'https://www.imdb.com/name/nm0913475/',
      fullName: 'John David Washington',
      job: 'actor',
      characters: ['Protagonist']
    },
    {
      id: 'nm1500155',
      url: 'https://www.imdb.com/name/nm1500155/',
      fullName: 'Robert Pattinson',
      job: 'actor',
      characters: ['Neil']
    },
    {
      id: 'nm4456120',
      url: 'https://www.imdb.com/name/nm4456120/',
      fullName: 'Elizabeth Debicki',
      job: 'actress',
      characters: ['Kat']
    },
    {
      id: 'nm1798449',
      url: 'https://www.imdb.com/name/nm1798449/',
      fullName: 'Juhan Ulfsak',
      job: 'actor',
      characters: ['Passenger']
    },
    {
      id: 'nm2131630',
      url: 'https://www.imdb.com/name/nm2131630/',
      fullName: 'Jefferson Hall',
      job: 'actor',
      characters: ['Well-Dressed Man']
    },
    {
      id: 'nm0882616',
      url: 'https://www.imdb.com/name/nm0882616/',
      fullName: 'Ivo Uukkivi',
      job: 'actor',
      characters: ['Uniformed Official']
    },
    {
      id: 'nm0397110',
      url: 'https://www.imdb.com/name/nm0397110/',
      fullName: 'Andrew Howard',
      job: 'actor',
      characters: ['Driver']
    },
    {
      id: 'nm0991553',
      url: 'https://www.imdb.com/name/nm0991553/',
      fullName: 'Rich Ceraulo Ko',
      job: 'actor',
      characters: ['SWAT', 'Target']
    },
    {
      id: 'nm1942304',
      url: 'https://www.imdb.com/name/nm1942304/',
      fullName: 'Jonathan Camp',
      job: 'actor',
      characters: ['SWAT 2']
    },
    {
      id: 'nm1434871',
      url: 'https://www.imdb.com/name/nm1434871/',
      fullName: 'Wes Chatham',
      job: 'actor',
      characters: ['SWAT 3']
    },
    {
      id: 'nm0634240',
      url: 'https://www.imdb.com/name/nm0634240/',
      fullName: 'Christopher Nolan',
      job: 'director',
      characters: []
    },
    {
      id: 'nm0634240',
      url: 'https://www.imdb.com/name/nm0634240/',
      fullName: 'Christopher Nolan',
      job: 'writer',
      characters: []
    },
    {
      id: 'nm0634240',
      url: 'https://www.imdb.com/name/nm0634240/',
      fullName: 'Christopher Nolan',
      job: 'producer',
      characters: []
    },
    {
      id: 'nm0858799',
      url: 'https://www.imdb.com/name/nm0858799/',
      fullName: 'Emma Thomas',
      job: 'producer',
      characters: []
    },
    {
      id: 'nm3234869',
      url: 'https://www.imdb.com/name/nm3234869/',
      fullName: 'Ludwig Göransson',
      job: 'composer',
      characters: []
    },
    {
      id: 'nm0887227',
      url: 'https://www.imdb.com/name/nm0887227/',
      fullName: 'Hoyte Van Hoytema',
      job: 'cinematographer',
      characters: []
    },
    {
      id: 'nm2352780',
      url: 'https://www.imdb.com/name/nm2352780/',
      fullName: 'Jennifer Lame',
      job: 'editor',
      characters: []
    },
    {
      id: 'nm0660667',
      url: 'https://www.imdb.com/name/nm0660667/',
      fullName: 'John Papsidera',
      job: 'casting_director',
      characters: []
    },
    {
      id: 'nm0189769',
      url: 'https://www.imdb.com/name/nm0189769/',
      fullName: 'Nathan Crowley',
      job: 'production_designer',
      characters: []
    }
  ]
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
