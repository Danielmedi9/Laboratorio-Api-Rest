import { Character } from './character.api-model';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/character`;

export const getCharacterById = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get<Character>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    throw error;
  }
};

export const saveCharacter = async (
  character: Partial<Character>
): Promise<boolean> => {
  try {
    const response = await axios.put(`${API_URL}/${character.id}`, character);
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    console.error(`Error saving character with id ${character.id}:`, error);
    return false;
  }
};
