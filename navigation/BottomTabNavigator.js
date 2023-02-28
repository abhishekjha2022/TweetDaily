import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../screens/SearchScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationScreen from '../screens/NotificationScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Homescreen"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="account-search"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notificaton"
      component={NotificationScreen}
      options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="notifications-on" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="message-text"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
export default BottomTabNavigator;
