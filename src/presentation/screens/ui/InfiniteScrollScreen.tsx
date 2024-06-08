import {useState} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const array = Array.from({length: 5}, (_, index) => numbers.length + index);
    setTimeout(() => {
      setNumbers([...numbers, ...array]);
    }, 3000);
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <Image
      source={{uri: `https://picsum.photos/id/${number}/200/300`}}
      style={{height: 400, width: '100%'}}
    />
  );
};
