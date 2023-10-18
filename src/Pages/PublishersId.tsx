import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiKey } from '../Api/ApiKey';
import { useSavedGamesContext } from '../AppContext/AppContext';
import { PublisherDatas } from '../types/types';

const PublishersId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addSavedGame } = useSavedGamesContext();
  
  const [publisher, setPublisher] = useState<PublisherDatas | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublisher = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.rawg.io/api/publishers/${id}?key=${ApiKey}`);
        const data: PublisherDatas = response.data;
        setPublisher(data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchPublisher();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {publisher && (
        <div>
          <h3 className='font-bold text-gray-900'>Name: {publisher.name}</h3>
          <p className='text-gray-900'>ID: {publisher.id}</p>
          <p className='text-gray-900'>Slug: {publisher.slug}</p>
          <p className='text-gray-900'>Games Count: {publisher.games_count}</p>
          <p className='text-gray-900'>Description: {publisher.description}</p>
          <img src={publisher.image_background} alt={publisher.name} 
          />
          <button className='mt-3'
            onClick={() => {
              addSavedGame({
                name: publisher.name,
                imageURL: publisher.image_background,
              });
            }}
          >
            Save Publisher
          </button>
        </div>
      )}
    </div>
  );
};

export default PublishersId;
