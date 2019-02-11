import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import AppRoutes from './config/routes';

// persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={styles.container}>
        <AppRoutes />
      </View>
    </PersistGate>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
