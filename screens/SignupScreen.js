import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

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

  renderErrors() {
    const { signUpErrors } = this.props;

    if (!signUpErrors) {
      return null;
    }

    return signUpErrors.map(error => <Text>{error}</Text>);
  }

  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        {this.renderErrors()}
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

const mapStateToProps = ({ auth: { signUpErrors, signUpSuccess } }) => ({
  signUpErrors, signUpSuccess
});

export default connect(
  mapStateToProps,
  { signUp: actions.signUp }
)(SignupScreen);
