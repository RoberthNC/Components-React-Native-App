/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {ComponentsApp} from './src/ComponentsApp';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => ComponentsApp);
