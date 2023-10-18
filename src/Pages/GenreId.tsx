import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiKey } from '../Api/ApiKey';
import { GenreDatas } from '../types/types';

const GenreId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [genre, setGenre] = useState<GenreDatas | null>(null);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/genres/${id}?key=${ApiKey}`);
        const data: GenreDatas = response.data.results;
        setGenre(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchGenre();
  }, [id]);


  return (
    <div>
      <h2>Genre Details</h2>
      {genre ? (
        <div>
          <h3>Genre ID: {genre.id}</h3>
          <h4>Genre Name: {genre.name}</h4>
          <p>Genre Description: {genre.description}</p> {/* Display description */}
          <img src={genre.image_background} alt={genre.name} /> {/* Display image_background */}
          {/* You can access other properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GenreId;
