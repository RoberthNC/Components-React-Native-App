import {useState} from 'react';
import {
  Animated,
  ImageStyle,
  StyleProp,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator
        style={{position: 'absolute'}}
        color={'gray'}
        size={30}
      />
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 1000});
          setIsLoading(false);
        }}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
