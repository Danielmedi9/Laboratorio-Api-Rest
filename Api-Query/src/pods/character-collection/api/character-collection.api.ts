import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const GRAPHQL_API_URL = 'https://rickandmortyapi.com/graphql';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const graphqlQuery = {
    query: `
      query GetCharacters {
        characters {
          results {
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
      }
    `,
  };

  const response = await axios.post(GRAPHQL_API_URL, graphqlQuery);

  return response.data.data.characters.results;
};
