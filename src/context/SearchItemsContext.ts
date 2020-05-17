import {createContext} from 'react';

export type SearchItemsContextState = {
  searchItems?: Array<string> | null;
  setSearchItems: (searchItems: Array<string> | null) => unknown;
};

export const SearchItemsContext = createContext<SearchItemsContextState>({
  searchItems: undefined,
  // eslint-disable-next-line
  setSearchItems: undefined as any,
});
