import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import TweetContainer from '../components/TweetContainer';
import {data} from '../assets/data';
import TweetIcon from '../components/TweetIcon';

const FeedScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header profileImage={data[0].profileImage} name={data[0].name} />
      <FlatList
        data={data}
        keyExtractor={data => data.userId}
        renderItem={({item}) => <TweetContainer item={item} />}
      />
            <TweetIcon />
    </SafeAreaView>
  );
};

export default FeedScreen;
