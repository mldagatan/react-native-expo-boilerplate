import React from 'react';
import { View, Text } from 'react-native';

const FlashMessage = ({ message }) => (
  <View style={styles.wrapper}>
    <Text style={styles.textStyle}>{message}</Text>
  </View>
);

const styles = {
  wrapper: {
    backgroundColor: '#B1E576',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 4
  },
  textStyle: {
    color: '#222'
  }
};

export default FlashMessage;
