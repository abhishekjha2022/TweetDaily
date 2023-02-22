import React, {useContext} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const SingleTweet = ({item, profileImage, name, userName}) => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('TweetDetailScreen', item)}>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: profileImage}}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: isDarkEnabled ? 'darkgrey' : '#000',
              }}>
              {name}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                color: isDarkEnabled ? 'grey' : '#000',
              }}>
              {userName}
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 54, top: -30}}>
          <Text style={{color: isDarkEnabled ? 'grey' : '#000'}}>
            {item.content}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 30,
            }}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon name="cards-heart" size={18} style={{color: 'darkgrey'}} />
              <Text style={{fontSize: 13, marginLeft: 3, color: 'darkgrey'}}>
                {item.likesBy.length}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon
                name="comment-multiple"
                size={18}
                style={{color: 'darkgrey'}}
              />
              <Text style={{fontSize: 13, marginLeft: 3, color: 'darkgrey'}}>
                {item.likesBy.length}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon name="share" size={18} style={{color: 'darkgrey'}} />
              <Text style={{fontSize: 13, marginLeft: 3, color: 'darkgrey'}}>
                {item.commentsBy.length}
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="google-analytics"
                size={18}
                style={{color: isDarkEnabled ? 'darkgrey' : 'black'}}
              />
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 3,
                  color: isDarkEnabled ? 'darkgrey' : 'black',
                }}>
                {item.likesBy.length}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderBottomWidth: 0.2,
          top: -20,
          borderBottomColor: isDarkEnabled ? 'lightgrey' : 'grey',
        }}></View>
    </TouchableOpacity>
  );
};

export default SingleTweet;
