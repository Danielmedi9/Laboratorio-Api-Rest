import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from '#scenes';
import { SingleCharacterCard } from '#pods/single-character/single-card.component';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.createCharacter}
          element={<CharacterScene />}
        />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
        <Route
          path={switchRoutes.detailCharacter}
          element={<SingleCharacterCard />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
