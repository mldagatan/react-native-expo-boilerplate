import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  signup: SignupScreen,
});

export default createAppContainer(AppNavigator);
