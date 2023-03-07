import React, {useState} from 'react';
import ColorThemeContext from './app/context/ColorThemeContext';
import FeedScreenNavigator from './navigation/FeedScreenNavigator';
import {NavigationContainer} from '@react-navigation/native';
import ProfileDrawerNavigator from './navigation/ProfileDrawerNavigator';
import AuthenticationScreen from './screens/AuthenticationScreen';

const App = () => {
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  return (
    // <NavigationContainer>
    //   <ColorThemeContext.Provider value={{isDarkEnabled, setIsDarkEnabled}}>
    //     <ProfileDrawerNavigator />
    //   </ColorThemeContext.Provider>
    // </NavigationContainer>
    <AuthenticationScreen />
  );
};
export default App;
