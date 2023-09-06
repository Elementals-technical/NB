import { createContext } from 'react';
import { createDispatchHook, createSelectorHook, Provider } from 'react-redux';
import store from './store';

export const ReactRedaxProvide = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};
