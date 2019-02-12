import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import _ from 'lodash';

import { SCREEN_WIDTH } from '../Globals';

import FlashMessage from '../components/FlashMessage';
import * as actions from '../actions';

class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    const { user } = this.props;

    if (user) {
      this.setState({ email: user.email });
    }

    this.isAuthSuccess(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.isAuthSuccess(nextProps);
  }

  isAuthSuccess = (props) => {
    const { authSuccess, navigation } = props;

    if (authSuccess) {
      navigation.navigate('dashboard');
    }
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const { auth } = this.props;

    auth(email, password);
  }

  toSignup = () => {
    const { navigation } = this.props;

    navigation.navigate('signup');
  }

  renderSignupConfirmation() {
    const { user, signUpSuccess } = this.props;

    if (!_.size(user) && !signUpSuccess) {
      return null;
    }

    const msg = 'Your sign up is successful!';

    return (
      <FlashMessage message={msg} />
    );
  }

  renderAuthErrors() {
    const { authErrors, authSuccess } = this.props;

    if (!authErrors.length && authSuccess) {
      return null;
    }

    return authErrors.map(message => (
      <FlashMessage
        message={message}
        key={message}
      />
    ));
  }

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>LOGIN</Text>
          {this.renderSignupConfirmation()}
          {this.renderAuthErrors()}
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(val) => { this.setState({ email: val }); }}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(val) => { this.setState({ password: val }); }}
            secureTextEntry
          />
        </View>
        <Button title="Log In" onPress={this.handleLogin} />
        <View>
          <Button
            title="Don't have an account yet? Sign up here."
            type="clear"
            onPress={this.toSignup}
            titleStyle={styles.loginStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputContainer: {
    width: SCREEN_WIDTH,
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  loginStyle: {
    fontSize: 14,
    color: '#000'
  }
};

const mapStateToProps = (
  {
    auth: {
      user,
      signUpSuccess,
      authSuccess,
      authErrors
    }
  }
) => ({
  user, signUpSuccess, authSuccess, authErrors
});

export default connect(mapStateToProps, {
  auth: actions.authenticateLogin
})(LoginScreen);
