import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SCREEN_WIDTH } from '../Globals';

class Slides extends Component {
  renderSlides() {
    const { data } = this.props;

    return data.map((slide) => {
      const { text, backgroundColor, color } = slide;

      return (
        <View
          key={text}
          style={[{ backgroundColor }, styles.slideStyle]}
        >
          <Text style={[{ color }, styles.textStyle]}>{text}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    padding: 30
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center'
  }
};

export default Slides;
