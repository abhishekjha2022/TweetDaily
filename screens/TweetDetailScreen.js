import {useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import CommentsList from '../components/CommentsList';
import IconsContainer from '../components/IconsContainer';

const TweetDetailScreen = () => {
  const {params} = useRoute();
  const {item, profileImage, userName, name} = params;
  const {commentsBy} = item;
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <View style={{marginTop: 5, padding: 5, flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: profileImage}}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        <View style={{marginLeft: 5, marginTop: 5}}>
          <Text style={{color: isDarkEnabled ? 'darkgrey':'#000', fontWeight: 'bold'}}>{name}</Text>
          <Text style={{color:'darkgrey'}}>{userName}</Text>
        </View>
      </View>
      <Text style={{padding: 5, fontSize: 17, color: isDarkEnabled ? 'darkgrey':'#000'}}>
        {item.content}
      </Text>
      {item.uploadedImage && (
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Image
            source={{uri: item.uploadedImage}}
            style={{height: 170, width: '100%', borderRadius: 5}}
          />
        </View>
      )}
      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <Text style={{marginRight: 5, color:'darkgrey'}}>&#x2022;</Text>
          <Text style={{color:'darkgrey'}}>{item.impression} Views</Text>
        </View>
        <View style={{marginLeft: 30, flexDirection: 'row'}}>
          <Text style={{marginRight: 5, color:'darkgrey'}}>&#x2022;</Text>
          <Text style={{color: 'darkgrey'}}>Published on {item.tweetDate}</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'lightgrey',
          width: '100%',
          marginTop: 6,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 5,
        }}>
        <IconsContainer iconName="cards-heart" iconSize={20} />
        <IconsContainer iconName="comment-multiple" iconSize={20} />
        <IconsContainer iconName="bookmark" iconSize={20} />
        <IconsContainer iconName="share" iconSize={20} />
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'lightgrey',
          width: '100%',
          marginTop: 6,
        }}></View>
      {commentsBy.length && (
        <>
          <Text
            style={{
              color: isDarkEnabled ? 'darkgrey':'#000',
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              marginTop: 5,
            }}>
            Comments
          </Text>
          <CommentsList commentsBy={commentsBy} />
        </>
      )}
    </View>
  );
};

export default TweetDetailScreen;
