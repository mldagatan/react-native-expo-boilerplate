import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ROOT_API = 'http://192.168.1.13:3000/api/v1';

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  ROOT_API
};
