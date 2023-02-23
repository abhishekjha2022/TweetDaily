import React, {useContext} from 'react';
import {Switch, View, Platform} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';

const ColorTheme = () => {
  const {isDarkEnabled, setIsDarkEnabled} = useContext(ColorThemeContext);
  const toggleSwitch = () => setIsDarkEnabled(previousState => !previousState);
  return (
    <View
      style={{
        height: 30,
        width: 30,
        marginRight: Platform.OS === 'ios' ? 15 : 0,
      }}>
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
