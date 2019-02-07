import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDES_DATA = [
  {
    text: 'Welcome to Expo Boilerplate!',
    backgroundColor: '#913CCD',
    color: '#fff'
  },
  {
    text: 'This is made to be used with Rails Api Boilerplate',
    backgroundColor: '#C60000',
    color: '#fff'
  },
  {
    text: 'Enjoy using this boilerplate!',
    backgroundColor: '#98CB4A',
    color: '#fff'
  }
];

class WelcomeScreen extends Component {
  redirectToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('signup');
  }

  render() {
    return (
      <Slides data={SLIDES_DATA} onComplete={this.redirectToLogin} />
    );
  }
}

export default WelcomeScreen;
