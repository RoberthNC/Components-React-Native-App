import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);

  const {
    animatedOpacity,
    animatedPosition,
    fadeIn,
    fadeOut,
    translatePositiveX,
    translateNegativeX,
  } = useAnimation();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateX: animatedPosition,
              },
            ],
          },
        ]}
      />
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeIn({duration: 300, toValue: 0.4});
        }}>
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeOut({duration: 300, toValue: 1});
        }}>
        <Text style={{color: colors.text}}>FadeOut</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          translatePositiveX();
        }}>
        <Text style={{color: colors.text}}>Translate x+</Text>
      </Pressable>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          translateNegativeX();
        }}>
        <Text style={{color: colors.text}}>Translate x-</Text>
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
