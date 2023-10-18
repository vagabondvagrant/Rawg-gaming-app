import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ApiKey } from '../Api/ApiKey';
import { PublisherData } from '../types/types';


const Publishers: React.FC = () => {
  // State for input search
  const [search, setSearch] = useState<string>('');

  // State to store search results
  const [searchResults, setSearchResults] = useState<PublisherData[]>([]);

  // State to handle loading and errors
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle the search
  const handleSearch = async () => {
    // Clear previous search results
    setSearchResults([]);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.rawg.io/api/publishers?key=${ApiKey}`, {
        params: {
          search: search,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can add additional logic or fetch data when the component mounts.
    // For example, fetch a list of publishers here.
  }, []);

  return (
    <div>
      <h2>Publishers</h2>

      {/* Search input */}
      <div className="flex justify-center items-center h-screen">
  <div className='bg-gray-900 flex p-4 absolute top-16'>
    <input
      type="search"
      placeholder="Search publishers..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
</div>


      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Display search results */}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <Link to={`/publishers/${result.id}`}>{result.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Publishers;
  