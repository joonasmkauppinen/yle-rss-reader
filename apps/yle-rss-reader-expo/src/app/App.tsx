import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleScreen } from '../screens/ArticleScreen';

import { MainNewsFeed } from '../screens/MainNewsFeed';
import { initializeStore } from '../store/store';

export type RootStackParamList = {
  MainNewsFeed: undefined;
  Article: { itemIndex: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  initializeStore();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainNewsFeed"
          component={MainNewsFeed}
          options={{ title: 'Pääuutiset' }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{ title: 'Artikkeli' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
