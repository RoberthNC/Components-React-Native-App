import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {top} = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'red', 'orange']}
        />
      }>
      <CustomView margin>
        <Title text="Pull to refresh" safe />
      </CustomView>
    </ScrollView>
  );
};
