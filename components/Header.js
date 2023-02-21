import React, {useContext} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import ColorTheme from './ColorTheme';

const Header = ({profileImage, name}) => {
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
            <View>
              <Image
                source={{uri: profileImage}}
                style={{height: 30, width: 30, borderRadius: 25}}
              />
            </View>
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
      <View style={{height: 1, width: '100%', backgroundColor: 'grey'}}></View>
    </>
  );
};

export default Header;
