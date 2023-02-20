import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ColorThemeContext from './app/context/ColorThemeContext';

const App = () => {
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  return (
    <ColorThemeContext.Provider value={{isDarkEnabled, setIsDarkEnabled}}>
      <HomeScreen />
    </ColorThemeContext.Provider>
  );
};
export default App;
