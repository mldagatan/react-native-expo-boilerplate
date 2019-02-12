import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { SCREEN_WIDTH } from '../Globals';

class Slides extends Component {
  renderLastSlide(i) {
    const {
      toSignup,
      toLogin,
      data,
      signupText,
      loginText
    } = this.props;

    if (i < data.length - 1) { return null; }

    return (
      <View>
        <Button
          raised
          title={signupText}
          containerStyle={styles.buttonStyle}
          onPress={toSignup}
        />
        <Button
          title={loginText}
          type="clear"
          onPress={toLogin}
          titleStyle={styles.loginStyle}
        />
      </View>
    );
  }

  renderSlides() {
    const { data } = this.props;

    return data.map((slide, i) => {
      const { text, backgroundColor, color } = slide;

      return (
        <View
          key={text}
          style={[{ backgroundColor }, styles.slideStyle]}
        >
          <Text style={[{ color }, styles.textStyle]}>{text}</Text>
          {this.renderLastSlide(i)}
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

Slides.defaultProps = {
  data: [],
  onComplete: () => {},
  signupText: 'Sign up',
  loginText: 'Already have an account? Login here.'
};

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
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: '#0288d1'
  },
  loginStyle: {
    fontSize: 14,
    color: '#fff'
  }
};

export default Slides;
