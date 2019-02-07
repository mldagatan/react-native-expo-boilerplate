import React from 'react';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';

const App = () => (
  <View style={styles.container}>
    <WelcomeScreen />
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
