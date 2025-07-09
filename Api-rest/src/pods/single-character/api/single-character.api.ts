import { CharacterEntityApi } from './single-character.api-model';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/character';

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
