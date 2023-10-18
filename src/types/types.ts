export interface GameResult {
    id: number;
    name: string;
    image_background: string;
  }
  
export type GameData = {
  id: number;
  name: string;
  description: string;
  background_image: string;
  released: string;
  rating: number;
  rating_top: number;
};
export type GenreData = {
  id: number;
  name: string;
  
};

export type GenreDatas = {
  id: number;
  name: string;
  image_background: string; 
  description: string; 
};

export type PublisherData = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
};

export type PublisherDatas = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
};
