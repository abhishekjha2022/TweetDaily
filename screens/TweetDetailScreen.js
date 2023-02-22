import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';

const TweetDetailScreen = () => {
  const {params} = useRoute();
  const {content} = params;
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View
      style={{backgroundColor: isDarkEnabled ? '#121212' : '#fff', flex: 1}}>
      <Text style={{color: isDarkEnabled ? 'darkgrey' : '#000'}}>
        {content}
      </Text>
    </View>
  );
};

export default TweetDetailScreen;
