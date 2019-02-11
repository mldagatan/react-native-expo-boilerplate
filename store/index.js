import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducers,
  {},
  compose(
    applyMiddleware(thunk)
  )
);

const persistor = persistStore(store);

export { store, persistor };
