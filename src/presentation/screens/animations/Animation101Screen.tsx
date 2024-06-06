import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useRef} from 'react';

export const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0.4)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animation ended'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animation ended'));
  };

  const easingTop = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('Animation ended'));
  };

  const easingBottom = () => {
    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 700,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => console.log('Animation ended'));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeIn();
        }}>
        <Text style={{color: '#000'}}>FadeIn</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeOut();
        }}>
        <Text style={{color: '#000'}}>FadeOut</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          easingTop();
        }}>
        <Text style={{color: '#000'}}>EasingTop</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          easingBottom();
        }}>
        <Text style={{color: '#000'}}>EasingBottom</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
