import { CharacterEntityApi } from './single-character.api-model';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/character`;

export const getCharacterById = async (
  id: string
): Promise<CharacterEntityApi> => {
  try {
    const response = await axios.get<CharacterEntityApi>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    throw error;
  }
};
