import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = createSwitchNavigator({
  signup: SignupScreen,
  welcome: WelcomeScreen,
  login: LoginScreen
});

export default createAppContainer(AppNavigator);
