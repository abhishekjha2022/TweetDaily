import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';

const AuthenticationScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const {height, width} = useWindowDimensions();
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.6, 0],
    );
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const buttonsAnimatedStyles = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [
        {rotate: withTiming(interpolation + 'deg', {duration: 1000})},
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, {duration: 800}))
          : withTiming(0, {duration: 300}),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };
  return (
    <Animated.View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('../assets/cosmos.jpeg')}
            height={height + 100}
            width={width + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>

        <Animated.View
          style={[
            {
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignSelf: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              borderRadius: 20,
              top: -20,
            },
            closeButtonContainerStyle,
          ]}>
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>

      <View style={{justifyContent: 'center', height: height / 3}}>
        <Animated.View style={buttonsAnimatedStyles}>
          <Pressable
            onPress={loginHandler}
            style={{
              backgroundColor: 'rgba(123,104,238,0.8)',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              marginHorizontal: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: '#fff',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: 0.5,
              }}>
              LOG IN
            </Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyles}>
          <Pressable
            onPress={registerHandler}
            style={{
              backgroundColor: 'rgba(123,104,238,0.8)',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              marginHorizontal: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: '#fff',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: 0.5,
              }}>
              REGISTER
            </Text>
          </Pressable>
        </Animated.View>

        <Animated.View
          style={[
            {
              marginBottom: 70,
              ...StyleSheet.absoluteFill,
              zIndex: -1,
              justifyContent: 'center',
            },
            formAnimatedStyle,
          ]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 25,
              paddingLeft: 10,
            }}
          />
          {isRegistering && (
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#000"
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 25,
                paddingLeft: 10,
              }}
            />
          )}

          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 25,
              paddingLeft: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'rgba(123,104,238,0.8)',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              marginHorizontal: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: 0.5,
              }}>
              {isRegistering ? 'REGISTER' : 'LOG IN'}
            </Text>
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};
export default AuthenticationScreen;
