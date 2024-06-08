import {StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  return (
    <View
      style={[
        {
          marginVertical: 10,
        },
        style,
      ]}
    />
  );
};
