import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiKey } from '../Api/ApiKey';
import { GenreData } from '../types/types';


const Genres: React.FC = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState<GenreData[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${ApiKey}`);
        const data: GenreData[] = response.data.results;
        setGenres(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className='mt-8 grid'>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`} onClick={() => navigate(`/genre/${genre.id}`)}>
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/search')}>Go Back to Search</button>
    </div>
  );
};

export default Genres;
