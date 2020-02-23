import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import observableFetch from './observableFetch';
import { AppState } from './types';

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    observableFetch
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  // @ts-ignore
  devTools: {
  // @ts-ignore
    stateSanitizer(state: AppState) {
      return {
        ...state,
        pokemonPage: {
          ...state.pokemonPage,
          details: Array.from(state.pokemonPage.details.entries())
        }
      };
    }
  }
});
export default store;

epicMiddleware.run(rootEpic);
