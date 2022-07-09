import { StatusBar, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ListItem } from '../components/ListItem/ListItem';
import { ListHeader } from '../components/ListHeader/ListHeader';
import { useStore } from '../store/store';
import { RootStackParamList } from '../app/App';

type MainNewsFeedProps = NativeStackScreenProps<
  RootStackParamList,
  'MainNewsFeed'
>;

export const MainNewsFeed = () => {
  const mainFeedData = useStore((state) => state.mainNewsFeed);

  if (!mainFeedData) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FlatList
        style={{ backgroundColor: 'white' }}
        contentInsetAdjustmentBehavior="automatic"
        data={mainFeedData?.items}
        ListHeaderComponent={<ListHeader>Pääuutiset</ListHeader>}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            description={item.description}
            itemIndex={index}
          />
        )}
      />
    </>
  );
};
