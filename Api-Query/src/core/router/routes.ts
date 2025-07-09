import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  detailCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  createCharacter: '/character/create',
  detailCharacter: '/character/:id/detail',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'editCharacter' | 'detailCharacter'> {
  detailCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detailCharacter: (id) => generatePath(switchRoutes.detailCharacter, { id }),
};
