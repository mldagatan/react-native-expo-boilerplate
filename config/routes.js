import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  signup: SignupScreen,
  login: LoginScreen,
  dashboard: DashboardScreen
});

export default createAppContainer(AppNavigator);
