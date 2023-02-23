import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';

const TweetDetailScreen = () => {
  const {params} = useRoute();
  const {item, profileImage, userName, name} = params;
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View
      style={{backgroundColor: isDarkEnabled ? '#121212' : '#fff', flex: 1}}>
      <Image source={{uri: profileImage}} style={{height: 50, width: 50}} />
      <Text style={{color: isDarkEnabled ? 'darkgrey' : '#000'}}>
        {userName}
      </Text>
      <Text>{name}</Text>
      <Text>{item.content}</Text>
      {item.uploadedImage && (
        <Image
          source={{uri: item.uploadedImage}}
          style={{height: 50, width: 50}}
        />
      )}
    </View>
  );
};

export default TweetDetailScreen;
