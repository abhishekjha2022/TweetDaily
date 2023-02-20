import React, {useContext, useState} from 'react';
import {Switch, View} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';

const ColorTheme = () => {
  const {isDarkEnabled, setIsDarkEnabled} = useContext(ColorThemeContext);
  console.log(isDarkEnabled);
  const toggleSwitch = () => setIsDarkEnabled(previousState => !previousState);
  return (
    <View style={{height: 50, width: 50}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkEnabled}
      />
    </View>
  );
};

export default ColorTheme;
