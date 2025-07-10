import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/character`;

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get<{
    info: { count: number };
    results: CharacterEntityApi[];
  }>(API_URL);
  return response.data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await axios.delete(`${API_URL}/${id}`);
  return true;
};
