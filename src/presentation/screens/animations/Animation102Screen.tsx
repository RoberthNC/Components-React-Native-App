import {useContext, useRef} from 'react';
import {View, Animated, PanResponder} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation102Screen = () => {
  const {colors} = useContext(ThemeContext);

  const positions = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: positions.x, // x,y are Animated.Value
        dy: positions.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        positions, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View
      {...panResponder.panHandlers}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <Animated.View
        style={[
          positions.getLayout(),
          {backgroundColor: 'blue', height: 100, width: 100},
        ]}
      />
    </View>
  );
};
