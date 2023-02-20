import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import ColorTheme from '../components/ColorTheme';
import ColorThemeContext from '../app/context/ColorThemeContext';

const HomeScreen = () => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View
      style={{
        backgroundColor: isDarkEnabled ? '#121212' : '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ColorTheme />
      <Text style={{color: isDarkEnabled ? 'darkgrey' : 'black'}}>
        Hello There
      </Text>
    </View>
  );
};

export default HomeScreen;
