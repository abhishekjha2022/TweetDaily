import React, {useContext} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import {useNavigation} from '@react-navigation/native';
import IconsContainer from './IconsContainer';

const SingleTweet = ({item, profileImage, name, userName}) => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('Tweet', {item, profileImage, name, userName})}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: profileImage}} style={styles.image} />
          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <Text
              style={[
                {color: isDarkEnabled ? 'darkgrey' : '#000'},
                styles.name,
              ]}>
              {name}
            </Text>
            <Text
              style={[
                {color: isDarkEnabled ? 'grey' : '#000'},
                styles.username,
              ]}>
              {userName}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{color: isDarkEnabled ? 'grey' : '#000'}}>
            {item.content}
          </Text>
          <TouchableOpacity style={styles.uploadImageContainer}>
            {item.uploadedImage && (
              <Image
                source={{uri: item.uploadedImage}}
                style={styles.uploadImage}
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
              iconStyle={{color: isDarkEnabled ? 'darkgrey' : 'black'}}
              textName={item.impression}
              textStyle={{
                marginLeft: 3,
                color: isDarkEnabled ? 'darkgrey' : 'black',
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          {borderBottomColor: isDarkEnabled ? 'lightgrey' : 'grey'},
          styles.seperator,
        ]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  username: {
    marginLeft: 5,
    fontSize: 14,
  },
  contentContainer: {
    marginLeft: 54,
    top: -30,
  },
  uploadImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    marginTop: 5,
  },
  uploadImage: {
    height: 150,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  seperator: {
    width: '100%',
    borderBottomWidth: 0.2,
    top: -20,
  },
});

export default SingleTweet;
