import React, {useContext} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import IconsContainer from './IconsContainer';

const SingleTweet = ({item, profileImage, name, userName}) => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('Tweet', item)}>
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
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 50,
              marginTop: 5,
            }}>
            {item.uploadedImage && (
              <Image
                source={{uri: item.uploadedImage}}
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  overflow: 'hidden',
                }}
              />
            )}
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 30,
            }}>
            <IconsContainer
              iconName="cards-heart"
              iconSize={18}
              textName={item.likesBy.length}
              textStyle={{
                marginLeft: 3,
                color: 'darkgrey',
              }}
            />
            <IconsContainer
              iconName="comment-multiple"
              iconSize={18}
              textName={item.commentsBy.length}
              textStyle={{
                marginLeft: 3,
                color: 'darkgrey',
              }}
            />

            <IconsContainer
              iconName="share"
              iconSize={18}
              textName={item.likesBy.length}
              textStyle={{
                marginLeft: 3,
                color: 'darkgrey',
              }}
            />

            <IconsContainer
              iconName="google-analytics"
              iconSize={18}
              iconStyle={{color: 'black'}}
              textName={item.impression}
              textStyle={{
                marginLeft: 3,
                color: 'black',
              }}
            />
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
