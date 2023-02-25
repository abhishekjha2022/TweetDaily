import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useContext} from 'react';
import ColorThemeContext from '../app/context/ColorThemeContext';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';
import PostTweetScreen from '../screens/PostTweetScreen';
import TweetDetailScreen from '../screens/TweetDetailScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const FeedScreenNavigator = () => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardStyle: {backgroundColor: isDarkEnabled ? '#000' : '#fff'},
        headerBackTitleVisible: false,
        headerStyle: {backgroundColor: isDarkEnabled ? '#000' : '#fff'},
        headerTitleStyle: {
          color: isDarkEnabled ? 'lightgrey' : 'black',
          fontSize: 15,
        },
        headerTintColor: isDarkEnabled ? 'lightgrey' : 'black',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen name="Tweet" component={TweetDetailScreen} />
      <Stack.Screen
        name="Post Tweet"
        component={PostTweetScreen}
        options={{...TransitionPresets.BottomSheetAndroid}}
      />
    </Stack.Navigator>
  );
};
export default FeedScreenNavigator;
