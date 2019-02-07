import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen
});

export default createAppContainer(AppNavigator);
