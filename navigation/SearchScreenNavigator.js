import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const SearchScreenNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default SearchScreenNavigator;
