import React from 'react';
import { useSavedGamesContext } from '../AppContext/AppContext';

type SavedGame = {
  name: string;
  imageURL: string; // Modify this type to match your data structure
};

const SavedGamesList: React.FC = () => {
  const { savedGames } = useSavedGamesContext();

  return (
    <div>
      <h2>Saved Games</h2>
      <ul>
        {savedGames.map((game: SavedGame) => (
          <li key={game.name}>
            <div>
              <img src={game.imageURL} alt={game.name} width="100" height="100" />
              <span>{game.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedGamesList;
