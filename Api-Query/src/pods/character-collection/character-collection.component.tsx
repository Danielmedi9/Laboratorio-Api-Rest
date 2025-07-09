import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
