import { registerRootComponent } from 'expo';
import { enableES5 } from 'immer';

import { App } from './src/app/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Enable immer to work on react native.
enableES5();
