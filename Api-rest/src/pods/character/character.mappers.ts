import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  species: character.species,
  gender: character.gender,
  origin: character.origin,
  image: character.image,
  episode: character.episode,
  url: character.url,
  bestSentence: character.bestSentence,
  created: new Date(character.created),
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): Partial<apiModel.Character> => ({
  ...character,
  id: Number(character.id),
  created: character.created.toISOString(),
});
