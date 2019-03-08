import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import FlashMessage from '../components/FlashMessage';

import * as actions from '../actions';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../Globals';

class SignupScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    this.checkForSuccess(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkForSuccess(nextProps);
  }

  checkForSuccess = (props) => {
    const { signUpSuccess, navigation } = props;

    if (!_.isNull(signUpSuccess) && signUpSuccess) {
      navigation.navigate('login');
    }
  }

  onSignupPress = () => {
    const { email, password } = this.state;
    const { signUp } = this.props;

    signUp(email, password);
  }

  toLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('login');
  }

  renderErrors() {
    const { signUpErrors } = this.props;

    if (!signUpErrors.length) {
      return null;
    }

    return signUpErrors.map(error => (
      <FlashMessage message={error} key={error} />
    ));
  }

  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <View style={styles.inputContainer}>
          <Text style={styles.signupTitle}>Sign Up</Text>
          {this.renderErrors()}
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
            title="Sign up"
            raised
            buttonStyle={styles.buttonStyles}
            onPress={this.onSignupPress}
          />
          <Button
            title="Already have an account? Login now."
            type="clear"
            onPress={this.toLogin}
            titleStyle={styles.loginStyle}
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
  },
  loginStyle: {
    fontSize: 14,
    color: '#000'
  }
};

const mapStateToProps = ({ auth: { signUpErrors, signUpSuccess } }) => ({
  signUpErrors, signUpSuccess
});

export default connect(
  mapStateToProps,
  { signUp: actions.signUp }
)(SignupScreen);
