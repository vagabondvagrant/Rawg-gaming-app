import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
// import {
//   GameResult,
//   GameData,
//   GenreData,
//   GenreDatas,
//   PublisherData,
//   PublisherDatas,
// } from '../types/types';

type SavedGame = {
  name: string;
  imageURL: string;
};

type SavedGamesContextType = {
  savedGames: SavedGame[];
  addSavedGame: (game: SavedGame) => void;
  removeSavedGame: (gameName: string) => void;
};

const SavedGamesContext = createContext<SavedGamesContextType | undefined>(undefined);

type SavedGamesContextProviderProps = {
  children: ReactNode;
};

export const SavedGamesContextProvider: React.FC<SavedGamesContextProviderProps> = ({ children }) => {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);

  useEffect(() => {
    const savedGamesFromLocalStorage = localStorage.getItem('savedGames');
    if (savedGamesFromLocalStorage) {
      setSavedGames(JSON.parse(savedGamesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedGames', JSON.stringify(savedGames));
  }, [savedGames]);

  const addSavedGame = (game: SavedGame) => {
    setSavedGames((prevSavedGames) => [...prevSavedGames, game]);
  };

  const removeSavedGame = (gameName: string) => {
    setSavedGames((prevSavedGames) => prevSavedGames.filter((savedGame) => savedGame.name !== gameName));
  };

  const contextValue: SavedGamesContextType = {
    savedGames,
    addSavedGame,
    removeSavedGame,
  };

  return <SavedGamesContext.Provider value={contextValue}>{children}</SavedGamesContext.Provider>;
};

export const useSavedGamesContext = () => {
  const context = useContext(SavedGamesContext);
  if (context === undefined) {
    throw new Error('useSavedGamesContext must be used within a SavedGamesContextProvider');
  }
  return context;
};
