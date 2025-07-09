import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  detailCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  createCharacter: '/character/create',
  editCharacter: '/character/:id',
  detailCharacter: '/character/:id/detail',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'editCharacter' | 'detailCharacter'> {
  editCharacter: NavigationFunction;
  detailCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  detailCharacter: (id) => generatePath(switchRoutes.detailCharacter, { id }),
};
