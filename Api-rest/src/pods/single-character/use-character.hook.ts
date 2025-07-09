import * as React from 'react';
import { getCharacterById } from './api/single-character.api';
import { Character } from './single-card.vm';
import { mapCharacterFromApiToVm } from './single-card.mapper';

interface UseCharacterResult {
  character: Character | null;
  loading: boolean;
  error: string | null;
}

export const useCharacter = (id: string | undefined): UseCharacterResult => {
  const [character, setCharacter] = React.useState<Character | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiData = await getCharacterById(id);
        setCharacter(mapCharacterFromApiToVm(apiData));
      } catch (err) {
        setError('Error loading character');
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  return { character, loading, error };
};
