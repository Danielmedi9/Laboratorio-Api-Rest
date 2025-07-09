import { CharacterEntityApi } from './single-character.api-model';
import axios from 'axios';

const GRAPHQL_API_URL = 'https://rickandmortyapi.com/graphql';

export const getCharacterById = async (
  id: string
): Promise<CharacterEntityApi> => {
  const graphqlQuery = {
    query: `
      query GetCharacter($id: ID!) {
        character(id: $id) {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          created
        }
      }
    `,
    variables: { id },
  };

  try {
    const response = await axios.post(GRAPHQL_API_URL, graphqlQuery);
    return response.data.data.character;
  } catch (error) {
    console.error(
      `Error fetching character with id ${id} from GraphQL:`,
      error
    );
    throw error;
  }
};
