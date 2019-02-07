import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppRoutes from './config/routes';

const App = () => (
  <View style={styles.container}>
    <AppRoutes />
  </View>
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
