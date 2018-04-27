import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('UpviralClone', () => App);

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);