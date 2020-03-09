import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/index';
import { loadState, saveState } from './localStorage';

// TOOL CHROME
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// LOAD LOCAL STORAGE
const persistedState = loadState();
const configStore = () => {
  const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );
  store.subscribe(() => {
    saveState({ movies: store.getState().movies });
  });
  return store;
};


export default configStore;
