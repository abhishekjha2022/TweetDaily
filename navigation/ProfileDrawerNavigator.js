import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import Header from '../components/Header';
import FeedScreenNavigator from './FeedScreenNavigator';
import FeedScreen from '../screens/FeedScreen';
import BottomTabNavigator from './BottomTabNavigator';
import MessagesScreen from '../screens/MessagesScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Overview" component={FeedScreenNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
export default ProfileDrawerNavigator;
