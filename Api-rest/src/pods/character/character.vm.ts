export interface Character {
  id: string;
  name: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  bestSentence?: string;
  created: Date;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  gender: '',
  species: '',
  origin: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  bestSentence: '',
  created: new Date(),
});
