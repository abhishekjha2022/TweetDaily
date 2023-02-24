import {useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, Text, Image, TextInput, Platform, ScrollView} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';

const PostTweetScreen = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  const {params} = useRoute();
  const profileImage = params;
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View style={{flex: 1, padding: 5}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: profileImage}}
          style={{height: 30, width: 30, borderRadius: 15}}
        />
        <View
          style={{
            backgroundColor: '#1DA1F2',
            marginLeft: 5,
            padding: 2,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            Public
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1, padding: 2}}>
        <TextInput
          autoFocus={true}
          multiline={true}
          placeholder="What's happening.."
          maxLength={500}
          onChangeText={text => setValue(text)}
          style={{color:isDarkEnabled ? 'darkgrey':'#000'}}
        />
      </ScrollView>
    </View>
  );
};

export default PostTweetScreen;
