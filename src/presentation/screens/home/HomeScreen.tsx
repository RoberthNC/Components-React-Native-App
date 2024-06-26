import {View, Text, ScrollView} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {MenuItem} from '../../components/ui/MenuItem';
import {CustomView} from '../../components/ui/CustomView';

const animationItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <CustomView margin>
      <ScrollView>
        <Title text="Menu options" safe />
        {animationItems.map((animationItem, index) => (
          <MenuItem
            key={animationItem.name}
            {...animationItem}
            isFirst={index === 0}
            isLast={index === animationItems.length - 1}
          />
        ))}
        <View style={{marginTop: 30}} />

        {uiMenuItems.map((uiMenuItem, index) => (
          <MenuItem
            key={uiMenuItem.name}
            {...uiMenuItem}
            isFirst={index === 0}
            isLast={index === uiMenuItems.length - 1}
          />
        ))}
        <View style={{marginTop: 30}} />
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={menuItem.name}
            {...menuItem}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
          />
        ))}
      </ScrollView>
    </CustomView>
  );
};
