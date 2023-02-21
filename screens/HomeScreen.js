import {View} from 'react-native';
import React, {useContext} from 'react';
import ColorThemeContext from '../app/context/ColorThemeContext';
import FeedScreen from './FeedScreen';

const HomeScreen = () => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View
      style={{flex: 1, backgroundColor: isDarkEnabled ? '#121212' : '#fff'}}>
      <FeedScreen />
    </View>
  );
};

export default HomeScreen;
