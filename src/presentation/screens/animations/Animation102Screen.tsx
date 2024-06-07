import {useRef} from 'react';
import {View, Animated, PanResponder} from 'react-native';

export const Animation102Screen = () => {
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
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          positions.getLayout(),
          {backgroundColor: 'blue', height: 100, width: 100},
        ]}
      />
    </View>
  );
};
