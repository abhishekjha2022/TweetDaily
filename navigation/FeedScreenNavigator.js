import {createStackNavigator} from '@react-navigation/stack';
import {useContext} from 'react';
import ColorThemeContext from '../app/context/ColorThemeContext';
import SingleTweet from '../components/SingleTweet';
import TweetContainer from '../components/TweetContainer';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';
import TweetDetailScreen from '../screens/TweetDetailScreen';

const Stack = createStackNavigator();

const FeedScreenNavigator = () => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: isDarkEnabled ? '#000' : '#fff'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen name="SingleTweet" component={SingleTweet} />
      <Stack.Screen name="TweetContainer" component={TweetContainer} />
      <Stack.Screen name="TweetDetailScreen" component={TweetDetailScreen} />
    </Stack.Navigator>
  );
};
export default FeedScreenNavigator;
