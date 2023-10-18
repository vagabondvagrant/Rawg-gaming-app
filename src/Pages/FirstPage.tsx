import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiKey } from '../Api/ApiKey';
import { useSavedGamesContext } from '../AppContext/AppContext';
import { GameData } from '../types/types';

const FirstPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addSavedGame } = useSavedGamesContext();

  const [game, setGame] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${ApiKey}`);
        const data: GameData = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchGame();
  }, [id]);

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">First Page</h2>
      {game ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Game Name: {game.name}</h3>
          <p className="text-gray-700 mb-2">Description: {game.description}</p>
          <p className="text-gray-700 mb-2">Release Date: {game.released}</p>
          <p className="text-gray-700 mb-2">Rating: {game.rating}</p>
          <p className="text-gray-700 mb-4">Top Rating: {game.rating_top}</p>
          <img src={game.background_image} alt={game.name} className="w-full rounded-md" />
          <button
            onClick={() => {
              if (game) {
                addSavedGame({
                  name: game.name,
                  imageURL: game.background_image,
                });
              }
            }}
            className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md mt-2"
          >
            Save Game
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-600 mt-4">Loading...</p>
      )}
    </div>
  );
};

export default FirstPage;
