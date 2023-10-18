import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiKey } from '../Api/ApiKey';

type PlatformData = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

const PlatformsId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [platform, setPlatform] = useState<PlatformData | null>(null);

  useEffect(() => {
    const fetchPlatform = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/platforms/${id}?key=${ApiKey}`);
        const data: PlatformData = response.data;
        setPlatform(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlatform();
  }, [id]);

  return (
    <div>
      <h2>Platform Details</h2>
      {platform ? (
        <div>
          <h3>Platform ID: {platform.id}</h3>
          <h4>Platform Name: {platform.name}</h4>
          <p>Slug: {platform.slug}</p>
          <p>Games Count: {platform.games_count}</p>
          <img src={platform.image_background} alt={platform.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlatformsId;
