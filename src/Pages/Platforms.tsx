import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiKey } from '../Api/ApiKey';
import axios from 'axios';

const Platforms: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/platforms?key=${ApiKey}`, {
        params: {
          search: search,
        },
      });
      const platformResults = response.data.results;

      if (platformResults.length > 0) {
        navigate(`/platform/${platformResults[0].id}`);
      } else {
        console.log('No platforms found for your search.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Search Platforms</h2>
      <div>
        <input
          type="search"
          placeholder="Search platforms..."
          value={search}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

export default Platforms;
