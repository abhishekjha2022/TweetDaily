import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import TweetContainer from '../components/TweetContainer';
import {data} from '../assets/data';
import TweetIcon from '../components/TweetIcon';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = () => {
  const {navigate} = useNavigation();
  const profileImage = data[0].profileImage;
  return (
    <View>
      <Header profileImage={profileImage} name={data[0].name} />
      <FlatList
        data={data}
        keyExtractor={data => data.userId}
        renderItem={({item}) => <TweetContainer item={item} />}
      />
      <View style={{position: 'absolute', top: '81%', marginLeft: '73%'}}>
        <TweetIcon onPress={() => navigate('Post Tweet', profileImage)} />
      </View>
    </View>
  );
};

export default FeedScreen;
