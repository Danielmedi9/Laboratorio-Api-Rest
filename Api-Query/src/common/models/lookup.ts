export interface Lookup {
  id: string;
  name: string;
  url?: string;
}

export const createEmptyLookup = (): Lookup => ({
  id: '',
  name: '',
  url: '',
});
