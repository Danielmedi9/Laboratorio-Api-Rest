export interface CharacterEntityApi {
  id: string;
  type: string;
  name: string;
  created: Date;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string;
  };
  image: string;
  episode: string[];
  url: string;
  bestSentence?: string;
}
