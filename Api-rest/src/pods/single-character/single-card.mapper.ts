import * as apiModel from './api/single-character.api-model';
import * as viewModel from './single-card.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  origin: {
    name: character.origin.name,
  },
  location: {
    name: character.location.name,
  },
  image: character.image,
  bestSentence: character.bestSentence,
});
