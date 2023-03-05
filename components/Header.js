import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import ColorTheme from './ColorTheme';

const Header = ({profileImage, name, onPress}) => {
  const {dispatch} = useNavigation();
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => dispatch(DrawerActions.openDrawer())}>
              <Image
                source={{uri: profileImage}}
                style={{height: 30, width: 30, borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 5,
                color: isDarkEnabled ? 'darkgrey' : '#000',
              }}>
              Welcome, {name}!
            </Text>
          </View>
          <ColorTheme />
        </View>
      </SafeAreaView>
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'lightgrey',
          marginBottom: 10,
        }}></View>
    </>
  );
};

export default Header;
