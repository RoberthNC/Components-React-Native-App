import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface Args {
  duration: number;
  toValue?: number;
  callback?: () => void;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const animatedPosition = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}: Args) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    callback = () => {},
  }: Args) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const translatePositiveX = () => {
    Animated.timing(animatedPosition, {
      toValue: 100,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const translateNegativeX = () => {
    Animated.timing(animatedPosition, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  return {
    animatedOpacity,
    animatedPosition,
    fadeIn,
    fadeOut,
    translatePositiveX,
    translateNegativeX,
  };
};
