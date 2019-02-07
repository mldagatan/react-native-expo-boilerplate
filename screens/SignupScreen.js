import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../Globals';

class SignupScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  onSignupPress = () => {
    const { email, password } = this.state;

    // console.log(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <View style={styles.inputContainer}>
          <Text style={styles.signupTitle}>Sign Up</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(val) => { this.setState({ email: val }); }}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(val) => { this.setState({ password: val }); }}
          />
        </View>
        <View>
          <Button
            title="Let's do this"
            raised
            buttonStyle={styles.buttonStyles}
            onPress={this.onSignupPress}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 10,
  },
  inputContainer: {
    width: SCREEN_WIDTH,
    padding: 20
  },
  signupTitle: {
    textAlign: 'center',
    fontSize: 20
  }
};

export default SignupScreen;
