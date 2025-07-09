import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = React.useCallback(async () => {
    if (id) {
      const apiCharacter = await api.getCharacterById(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    }
  }, [id]);

  React.useEffect(() => {
    handleLoadCharacter();
  }, [handleLoadCharacter]);

  const handleSave = async (character: Character) => {
    try {
      console.log('Saving character:', character);
      const apiCharacter = mapCharacterFromVmToApi(character);
      const success = await api.saveCharacter(apiCharacter);

      if (success) {
        navigate(-1);
      } else {
        alert('Error saving character');
      }
    } catch (error) {
      console.error('Error in handleSave:', error);
      alert(`Error saving character: ${error.message}`);
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
