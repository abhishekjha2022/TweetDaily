import React, {useContext} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ColorThemeContext from '../app/context/ColorThemeContext';

const TweetHeader = ({item}) => {
  const {profileImage, name, userName, comments} = item;
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <TouchableOpacity
      onLongPress={() =>
        Alert.alert('Are you sure you want to delete this comment?')
      }>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          source={{uri: profileImage}}
          style={{height: 30, width: 30, borderRadius: 15}}
        />
        <View style={{justifyContent: 'center', marginLeft: 5}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: isDarkEnabled ? 'darkgrey' : '#000',
              }}>
              {name}
            </Text>
            <Text style={{fontSize: 13, marginLeft: 5, color: 'darkgrey'}}>
              {userName}
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginRight: 20,
                color: isDarkEnabled ? 'darkgrey' : '#000',
              }}>
              {comments}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default TweetHeader;
