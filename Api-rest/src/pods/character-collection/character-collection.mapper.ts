import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  type: character.type,
  name: character.name,
  created: new Date(character.created),
  species: character.species,
  status: character.status,
  gender: character.gender,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
  location: {
    id: character.location.id,
    name: character.location.name,
    type: character.location.type,
    dimension: character.location.dimension,
    residents: character.location.residents,
  },
  image: character.image,
  episode: character.episode,
  url: character.url,
});
