import React, {useState} from 'react';
import ColorThemeContext from './app/context/ColorThemeContext';
import FeedScreenNavigator from './navigation/FeedScreenNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  return (
    <NavigationContainer>
      <ColorThemeContext.Provider value={{isDarkEnabled, setIsDarkEnabled}}>
        <FeedScreenNavigator />
      </ColorThemeContext.Provider>
    </NavigationContainer>
  );
};
export default App;
