import React, { useState } from 'react';
import axios from 'axios';
import { ApiKey } from '../Api/ApiKey';
import { GameResult } from '../types/types';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<GameResult[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?key=${ApiKey}`, {
        params: {
          search: search,
        },
      });

      const gameResults: GameResult[] = response.data.results;
      setSearchResults(gameResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToFirstPage = (id: number) => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="flex sm:justify-center p-5 bg-blue-800 rounded-[23px] top-16 absolute items-center">
      <input
        type="search"
        className="bg-white p-2 rounded-lg text-gray-800 "
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-700 text-white hover:bg-blue-400 ml-2"
      >
        Search
      </button>
      <div />
      <div className='bg-red-800'>
        {searchResults.length > 0 && (
          <div className="sm:grid grid-cols-4 gap-4">
            {searchResults.map((game) => (
              <article
                key={game.id}
                className="bg-white p-1 rounded-md cursor-pointer"
                onClick={() => navigateToFirstPage(game.id)}
              >
                <h3 className="text-xl font-semibold hover:bg-gray-900 hover:text-white rounded-lg">
                  {game.name}
                </h3>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
